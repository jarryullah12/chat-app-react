const express=require("express");
const router = express.Router();
const students=require("../models/studSchema");
const Date = require("../models/DateSchema");


//send data post method
router.post("/addstud",async(req,res)=>{
    const {name,address,subject,contact}=req.body;

    if(!name || !address || !subject || !contact){
        res.status(422).json("Please fillup the Data")
    }

    try{
        const prestud=await students.findOne({contact:contact});

        if(prestud){
            res.status(422).json("This student already Present")

        }else{
            const addstudent =new students ({name,address,subject,contact});
            await addstudent.save();
            res.status(201).json(addstudent)
        }
    }catch(err){
        res.status(422).json(err)
    }
});

//get student Data
router.get("/getstud", async(req,res)=>{
    try{
        const studdata= await students.find();
        res.status(201).json(studdata);
    }catch(err){
        res.status(422).json(err)
    }
})

//get signle student Data
router.get("/getstud/:id", async(req,res)=>{
    try{
       const {id}=req.params;
       const singlestud=await students.findById({_id:id});
       res.status(201).json(singlestud);
    }catch(err){
        res.status(422).json(err);
    }
})


//Delete student Data
router.delete("/deletestud/:id", async(req,res)=>{
    try{
       const {id} = req.params;
       const deltestud=await students.findByIdAndDelete({_id:id});
       res.status(201).json(deltestud);
    }catch(err){
        res.status(422).json(err);
    }
})

// update student data
router.patch("/updatestud/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updatestud = await students.findByIdAndUpdate(id,req.body,{
            new:true
        });

        res.status(201).json(updatestud);

    } catch (error) {
        res.status(422).json(error);
    }
})


 // count entries
 router.get('/Count', async (req, res) => {
    try {
      const count = await students.countDocuments({});
      res.json({ count });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });



// admin approve;

router.get('/admin', async (req, res) => {
    try {
      const singlestud = await students.find();
      res.json(singlestud);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });

// API route to update the approval status
router.put('/admin/:id/approve', async (req, res) => {
  const { id } = req.params;
  const { isApproved } = req.body;

  try {
    const student = await students.findByIdAndUpdate(
      id,
      { isApproved },
      { new: true }
    );

    if (!student) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});



// select date


// POST: Create new date with a date
router.post('/add', async (req, res) => {
  const { name, date } = req.body;

  try {
      const newDate = new Date({ name, date });
      await newDate.save();
      res.status(201).json({ message: 'date added successfully!', date: newDate });
  } catch (error) {
      res.status(500).json({ error: 'Failed to add Date' });
  }
});


module.exports=router;