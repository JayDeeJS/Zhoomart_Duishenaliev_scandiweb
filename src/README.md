Here I'd like to provide some information
on difficulties I have faced during the project build.

I realize I have taken an awful amount
of time (about) 2 months. But I was intended to finish the build
and, perhaps, get some feedback.

1. Each 'out of stock' product has dimgray background
   and cannot be added to Cart.

2. Cart overlay is displayed upon mouse entering
   the Cart Link and is closed upon clicking
   the 'x' button at the top. Currency switcher works the same way,
   except being triggered by onClick.
   
3.Currency switcher changes each corresponding amount and
currency symbol for each product. 'Add to cart' button adds
selected product with selected currency symbol and amount into Cart.

4. At PDP page, product image changes upon clicking the photo album on
   the left.

5.  In the Cart, if the quantity of product is 1, clicking '-' button removes
   it.
   
6. Upon clicking 'ORDER' button, Cart and Cart overlay product(s)
   are added into localStorage.

7. I have added react-hot-toast custom notifications for
adding/deleting products.


Setbacks:

1. I have queried the data from GraphQL endpoint,
but only for the Links (category names). At first,
I was able to display the products using map method.
However, I was having trouble displaying the separate
price (amount) for each selected currency. Although, I could
still fetch all the data at GraphQL playground endpoint.

2. As a result,I have decided to store the products, currency
and amount data in reducer.js and display them
through React Context API.

6. Final thing to point out... I have used Function components
instead of Class components. How do I justify not following the most
important condition of the assignment?

I have started using Class components from the beginning of the
build, but then switched to Function components due to my experience
with using them. My mistake was that at that time my only goal
was to build the project first and then switch to Class components later.

This assignment helped me a lot to find out on which areas I need
to work more, like learning how to use Class components, building the schema
for GraphQL endpoint and display deeply nested data at the client side.

I understand I, probably did not pass the assignment, but it definitely helped
me a lot to focus on which skills I need to improve.

P.S. please be gentle :)
