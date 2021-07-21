var express =require("express");
const router = express();

//import { v4 as uuidv4 } from 'uuid';

const data =require( './data.json');

type object1 = {

    ID: string;
    First__Name: string;
    Middle__Name: string;
    Last__Name: string;
    Email: string;
    Phone_Number: string;
    Role: number;
    Address: string;
    DateTime:string;
}

//SENDS ALL MEMBERS OF JSON DATA
router.get("/", (req, res) => {

    res.json(data);

});

//SEND A SPECIFIC MEMEBER FROM JSON DATA
router.get("/:id", (req, res) => {

    let id = req.params.id;
    if (data.some(data => data.ID === id)) {
        res.status(200).json(data.filter(data => data.ID === id))
    }
    else
        res.status(400).json({ message: `No Member with Member ID ${id} Found` });

})

//ADD MEMBER TO THE EXISTING JSON
router.post("/", (req, res) => {

    const newValue: object1 = {
        ID: req.body.ID,
        First__Name: req.body.First__Name,
        Middle__Name: req.body.Middle__Name,
        Last__Name: req.body.Last__Name,
        Email: req.body.Email,
        Phone_Number: req.body.Phone_Number,
        Role: req.body.Role,
        Address: req.body.Address,
        DateTime:req.body.DateTime

    }
    if (!newValue.First__Name || !newValue.Last__Name || !newValue.Email || !newValue.Phone_Number || !newValue.Role || !newValue.Address) {
        res.status(400).json({ message: `Give Correct Input` })
    }
    else if (data.some(data => newValue.Phone_Number === data.Phone_Number)) {
        res.status(400).json({ message: `User Already Exists` })
    }

    else {
        data.push(newValue);
        res.status(200).json({ message: `Member Successfully Added !`, "New Member": newValue});
    }



})

//EDIT MEMBER

router.put('/:id', (req, res) => {
    let id = req.params.id;
    if (data.some(data => data.ID === id)) {


        data.forEach(object => {
            if (object.ID === id) {
                object.First__Name = req.body.First__Name ? req.body.First__Name : object.First__Name;
                object.Middle__Name = req.body.Middle__Name ? req.body.Middle__Name : object.Middle__Name;
                object.Last__Name = req.body.Last__Name ? req.body.Last__Name : object.Last__Name;
                object.Email = req.body.Email ? req.body.Email : object.Email;
                object.Phone_Number = req.body.Phone_Number ? req.body.Phone_Number : object.Phone_Number;
                object.Role = req.body.Role ? req.body.Role : object.Role;
                object.Address = req.body.Address ? req.body.Address : object.Address;
                object.DateTime= req.body.DateTime ? req.body.DateTime : object.DateTime;
                res.status(200).json({ message: 'Updated Successfully', updatedMembers: data });
            }
        })
    }
    else {
        res.status(400).json({ message: `No Member with Member ID ${id} Found` });
    }
})

//DELETE MEMBER
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    
    if (data.some(data => data.ID === id)) {

        let index = 0;
        
        for (; index < data.length; index++) {
            if (data[index].ID === id)
                break;
        }
        data.splice(index, 1);
        res.status(200).json({ message: `Deleted Member with ID: ${id}`, members: data });
        console.log(id);
    }
    else {
        res.status(400).json({ message: `No Member with Member ID ${id} Found` });
    }


})

module.exports = router;