/*
Here's how this code works:

When a PUT request is made to update an item, the :id parameter in the URL (e.g., /items/:id) specifies 
which item should be updated.

req.params.id extracts the id parameter from the request's URL.

parseInt(req.params.id) converts the id parameter to an integer, ensuring it can be compared to 
the id property of items in the array.

The items.find() method iterates through each item in the items array and checks if the id of the 
current item matches the itemId extracted from the request.
If a matching item is found, the itemToUpdate variable is assigned the reference to that item. 
If no matching item is found, itemToUpdate will be undefined.

*/
