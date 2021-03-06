db={
    "orders": [
      {
        "_id": 1,
        "item": "almonds",
        "price": 12,
        "quantity": 2
      },
      {
        "_id": 2,
        "item": "pecans",
        "price": 20,
        "quantity": 1
      },
      
    ],
    "inventory": [
      {
        "_id": 1,
        "sku": "almonds",
        "description": "product 1",
        "instock": 120
      },
      {
        "_id": 2,
        "sku": "pecans",
        "description": "product 2",
        "instock": 80
      },
      {
        "_id": 3,
        "sku": "almonds",
        "description": "product 3",
        "instock": 60
      },
      {
        "_id": 4,
        "sku": "pecans",
        "description": "product 4",
        "instock": 70
      },
      {
        "_id": 5,
        "sku": null,
        "description": "Incomplete"
      },
      {
        "_id": 6
      }
    ]
  }

  db.orders.aggregate([
    {
      "$lookup": {
        "from": "inventory",
        "localField": "item",
        "foreignField": "sku",
        "as": "inventory_docs"
      }
    },
    {
      "$unwind": "$inventory_docs"
    },
    {
      "$sort": {
        "inventory_docs.instock": -1
      }
    },
    {
      "$group": {
        "_id": "$_id",
        "inventory_docs": {
          "$push": "$inventory_docs"
        },
        "item": {
          "$first": "$item"
        },
        "price": {
          "$first": "$price"
        },
        "quantity": {
          "$first": "$quantity"
        },
        "totalStock": {
          "$sum": "$inventory_docs.instock"
        }
      }
    },
    {
      "$sort": {
        "item": 1
      }
    },
    {
      "$project": {
        "inventory_docs.sku": 0
      }
    }
  ])

  {
    // find 3rd min no.
    let arr = [5,3,8,4,1,6,1]
    let result = [Infinity, Infinity, Infinity];
    for(let i=0; i<arr.length; i++){
      if(arr[i]<result[0]){
        result[2]=result[1];
        result[1]=result[0];
        result[0]=arr[i];
      }else if(arr[i]<result[1]){
        result[2]=result[1];
        result[1]=arr[i];
      }else if(arr[i]<result[2]){
        result[2]=arr[i];
      }
    }
    console.log(result)
  }