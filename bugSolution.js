```javascript
// Correct usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: 10 } });

//Alternative solution to handle non-numeric fields:
//1. Convert to number before update if possible

db.collection('myCollection').findOne({_id:1}, (err, doc)=>{
  if(err) throw err;
  let num = Number(doc.field);
  if(isNaN(num)){
    num=0; //Handle cases where conversion to number fails
  }
  db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: 10 } });
})

//2. Use $set operator to update if type is not numeric
//Only updates the field if it is a number, otherwise no change occurs

db.collection('myCollection').updateOne({_id:1},{$inc:{field:10}});
```