
const Listing = require("../models/listing");


//index
module.exports.index = async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings})
};


//new
module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs");
};


//show
module.exports.showlisting = async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({
    path:"reviews",
    populate:{
        path:"author",
    },
    })
    .populate("owner");
    if(! listing){
        req.flash("error","Listing you required for does not exist!")
        res.redirect("/listings")
    }
    console.log(listing);
    res.render("listings/show.ejs",{listing})};


const axios = require("axios");

module.exports.createListing = async(req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };


    
    // Geocoding - using OpenStreetMap Nominatim
    const geoResponse = await axios.get("https://nominatim.openstreetmap.org/search", {
        params: {
            q: req.body.listing.location,
            format: "json"
        },
        headers: {
            'User-Agent': 'YourAppName/1.0 (your@email.com)' // Nominatim requires this
        }
    });

    if (geoResponse.data && geoResponse.data.length > 0) {
        const lat = parseFloat(geoResponse.data[0].lat);
        const lon = parseFloat(geoResponse.data[0].lon);
        newListing.geometry = {
            type: "Point",
            coordinates: [lon, lat]
        };
    } else {
        newListing.geometry = {
            type: "Point",
            coordinates: [0, 0] // fallback if not found
        };
    }

    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
};


  

  


  //edit
module.exports.renderEditForm = async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(! listing){
        req.flash("error","Listing you required for does not exist!")
        res.redirect("/listings")
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/h_25,w_25")
    res.render("listings/edit.ejs",{listing, originalImageUrl});
};



//update
module.exports.updatelisting = async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});

    if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url , filename};
    await listing.save();
    }
    req.flash("success","Listing Updated");
    res.redirect(`/listings/${id}`)
}


  

//delete
module.exports.deletelisting = async(req,res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing Deleted!")
    res.redirect("/listings");
}




//Search 
module.exports.index = async (req, res) => {
  const { search } = req.query;
  let allListings;

  if (search) {
    allListings = await Listing.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
        { country: { $regex: search, $options: "i" } }
      ]
    });
  } else {
    allListings = await Listing.find({});
  }

  res.render("listings/index.ejs", { allListings, search });
};
