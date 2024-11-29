import { Container, Row, Col, Card } from "react-bootstrap";
import "../components/Menu.css";
import React from "react";
class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [
        {
          _id: "653952ba6786649d788e2168",
          dish: "Chicken Korma",
          imageUrl:
            "https://silkroadrecipes.com/wp-content/uploads/2020/08/Chicken-Korma-square.jpg",
          recipe: "https://www.indianhealthyrecipes.com/chicken-korma-recipe/",
          price: "239",
          __v: 0,
        },
        {
          _id: "653954366786649d788e216a",
          dish: "Malai Chicken",
          imageUrl:
            "https://bing.com/th?id=OSK.38e085f74a288d1df7742743dceb42de",
          recipe: "https://www.indianhealthyrecipes.com/malai-chicken-recipe/",
          price: "249",
          __v: 0,
        },
        {
          _id: "653954816786649d788e216c",
          dish: "Kadhai Chicken",
          imageUrl:
            "https://bing.com/th?id=OSK.b36eab9480491fc40cba1ec96050bc27",
          recipe: "https://www.indianhealthyrecipes.com/kadai-chicken/",
          price: "239",
          __v: 0,
        },
        {
          _id: "653954df6786649d788e216e",
          dish: "Butter Chicken",
          imageUrl:
            "https://bing.com/th?id=OSK.d7bebc4efe29fa3ef4f499220d522824",
          recipe: " https://www.indianhealthyrecipes.com/butter-chicken/",
          price: "299",
          __v: 0,
        },
        {
          _id: "653955126786649d788e2170",
          dish: "Chicken Biryani",
          imageUrl:
            "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?w=2000",
          recipe:
            "https://www.indianhealthyrecipes.com/chicken-biryani-recipe/",
          price: "149",
          __v: 0,
        },
        {
          _id: "6539554c6786649d788e2172",
          dish: "Chicken Curry",
          imageUrl:
            "https://img.freepik.com/free-photo/top-view-vegetable-soup-with-meat-inside-plate-grey_140725-36040.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=ais",
          recipe: "https://www.indianhealthyrecipes.com/chicken-curry/",
          price: "209",
          __v: 0,
        },
        {
          _id: "653955876786649d788e2174",
          dish: "Hyderabadi Chicken Biryani",
          imageUrl:
            "https://img.freepik.com/free-photo/plate-biryani-with-bowl-rice-bowl-food-table_505751-3814.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698105600&semt=ais",
          recipe:
            "https://www.indianhealthyrecipes.com/hyderabadi-biryani-recipe/",
          price: "199",
          __v: 0,
        },
        {
          _id: "653955c16786649d788e2176",
          dish: "Chicken Shwarma",
          imageUrl:
            "https://img.freepik.com/premium-photo/big-shawarma-kebab-fried-fire-street-food-sandwich-gyro-fresh-roll-lavash-pita-bread-chicken-beef-shawarma-3d-illustration_86390-9693.jpg",
          recipe:
            "https://www.indianhealthyrecipes.com/chicken-shawarma-recipe-make-shawarma/",
          price: "119",
          __v: 0,
        },
        {
          _id: "653956236786649d788e2178",
          dish: "Garlic Chicken ",
          imageUrl:
            " https://img.freepik.com/free-photo/chicken-oil-salt-sauce-onion-garlic-chicken-with-herbs-lavash-board_140725-73745.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696550400&semt=ais",
          recipe: "https://www.indianhealthyrecipes.com/garlic-chicken/",
          price: "139",
          __v: 0,
        },
        {
          _id: "6539565a6786649d788e217a",
          dish: "Paneer Lababdaar ",
          imageUrl:
            "  https://t4.ftcdn.net/jpg/03/31/65/45/360_F_331654539_FaCJJWVUB3SmrIPIkmeEOnk7TYgl7xQC.jpg",
          recipe:
            "https://www.vegrecipesofindia.com/paneer-lababdar-recipe-restaurant-style/",
          price: "120",
          __v: 0,
        },
        {
          _id: "6539567c6786649d788e217c",
          dish: "Paneer Tikka  ",
          imageUrl:
            " https://www.shutterstock.com/image-photo/paneer-tikka-kabab-red-sauce-260nw-423351916.jpg",
          recipe:
            " https://www.vegrecipesofindia.com/paneer-tikka-recipe-paneer-tikka/",
          price: "120",
          __v: 0,
        },
        {
          _id: "653956ba6786649d788e217e",
          dish: "Matar Paneer  ",
          imageUrl:
            "https://t3.ftcdn.net/jpg/04/02/96/24/360_F_402962424_qBGTw25i52nmi8Yz7M6IbpEev602CQts.jpg",
          recipe:
            " https://www-vegrecipesofindia-com.translate.goog/matar-paneer/?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc",
          price: "110",
          __v: 0,
        },
        {
          _id: "653956e56786649d788e2180",
          dish: "Kadhai Paneer  ",
          imageUrl:
            "https://t4.ftcdn.net/jpg/03/31/65/45/360_F_331654539_FaCJJWVUB3SmrIPIkmeEOnk7TYgl7xQC.jpg",
          recipe:
            " https://www.indianhealthyrecipes.com/kadai-paneer-gravy-recipe/",
          price: "115",
          __v: 0,
        },
        {
          _id: "653957416786649d788e2182",
          dish: "Chilli Paneer",
          imageUrl:
            "https://media.istockphoto.com/id/697316634/photo/spicy-paneer-or-chilli-paneer-or-paneer-tikka-or-cottage-cheese-served-in-white-dish-with.jpg?s=612x612&w=0&k=20&c=PRN-OSzxCma_aAR8-DCMpOHP5XePk6mzzhB-zG4tGrg=",
          recipe:
            " https://www-indianhealthyrecipes-com.translate.goog/chilli-paneer-recipe/?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc",
          price: "119",
          __v: 0,
        },
        {
          _id: "653957706786649d788e2184",
          dish: "Palak Paneer",
          imageUrl:
            "https://media.istockphoto.com/id/1146291429/photo/palak-paneer-or-spinach-and-cottage-cheese-curry-on-a-dark-background-traditional-indian-food.jpg?s=612x612&w=0&k=20&c=LuY5cNs9p9EonSEqRE8t7xgvCPjLfT2iPYhsg5ZRNkw=",
          recipe:
            "https://www-indianhealthyrecipes-com.translate.goog/palak-paneer-recipe-easy-paneer-recipes-step-by-step-pics/?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc",
          price: "109",
          __v: 0,
        },
        {
          _id: "653957ed6786649d788e2186",
          dish: "Chicago Pizza   ",
          imageUrl:
            " https://t4.ftcdn.net/jpg/01/33/59/85/360_F_133598551_0VSqwOPVHIbdVVcOBaGujfLw8JfsanQR.jpg",
          recipe:
            "https://sallysbakingaddiction.com/how-to-make-chicago-style-deep-dish-pizza/",
          price: "299",
          __v: 0,
        },
        {
          _id: "653958466786649d788e2188",
          dish: "California Pizza   ",
          imageUrl:
            " https://media.istockphoto.com/id/637387652/photo/wood-fired-pizza.jpg?s=612x612&w=0&k=20&c=SIgnLPzRYnmJ4Ympo9G5Tg_INCdv1udokSItfo9bHVo=",
          recipe: "  https://natashaskitchen.com/california-pizza-recipe/",
          price: "249",
          __v: 0,
        },
        {
          _id: "65395a7c6786649d788e218a",
          dish: "Greek  Pizza   ",
          imageUrl:
            " https://media.istockphoto.com/id/474526454/photo/greek-pizza.jpg?s=612x612&w=0&k=20&c=5besaLH6qw94aqHgPUMa1pEPiDJUMGezaLj-8owwI14=",
          recipe: " https://www.seriouseats.com/new-england-greek-style-pizza",
          price: "199",
          __v: 0,
        },
        {
          _id: "65395aa96786649d788e218c",
          dish: "margherita  Pizza   ",
          imageUrl:
            " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHTrpNyNyrf8l4nz1DagZcMxaaa-KWn4TmQgy5hdpvlw&s",
          recipe: " https://www.vegrecipesofindia.com/margherita-pizza-recipe/",
          price: "149",
          __v: 0,
        },
        {
          _id: "65395ae16786649d788e218e",
          dish: "FarmHouse Pizza   ",
          imageUrl:
            " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8J0Ili7ib42RI8lFairI5WsXA0SOM0ei3O3Kz7g&s",
          recipe:
            "  https://www.google.com/search?q=farmhouse+pizza+recipe&sca_esv=576523393&rlz=1C1IMSH_en-GBIN1073IN1073&sxsrf=AM9HkKkPjAUpUf_G6_lsUzE3wJn3Y7SE5w%3A1698250886198&ei=hkA5ZY7OC7-nseMP7OaP6AE&oq=farpizza+recipe&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2ZhcnBpenphIHJlY2lwZSoCCAEyBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHkiMFVAAWOYGcAB4AJABAJgB7AGgAaEFqgEDMi0zuAEByAEA-AEBwgINEAAYDRiABBixAxixA8ICBxAAGA0YgATiAwQYACBBiAYB&sclient=gws-wiz-serp",
          price: "179",
          __v: 0,
        },
        {
          _id: "65395b1c6786649d788e2190",
          dish: "Brick Oven Pizza   ",
          imageUrl:
            " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtEksd-BBl3oSONeXt5cLKzxTWIGYTZkoEonB0ywZoA&s",
          recipe:
            " https://www.allrecipes.com/recipe/70801/brick-oven-pizza-brooklyn-style/",
          price: "199",
          __v: 0,
        },
        {
          _id: "65395b296786649d788e2192",
          dish: "Brick Oven Pizza   ",
          imageUrl:
            " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtEksd-BBl3oSONeXt5cLKzxTWIGYTZkoEonB0ywZoA&s",
          recipe:
            " https://www.allrecipes.com/recipe/70801/brick-oven-pizza-brooklyn-style/",
          price: "199",
          __v: 0,
        },
        {
          _id: "65395bd56786649d788e2194",
          dish: "Tomato Cocumber SANDWITCH ",
          imageUrl:
            " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwjGbN9l_Ujp68dXpej5KRKpreln2HSIYrUpEaDXGWMg&s",
          recipe:
            "  https://www.indianhealthyrecipes.com/tomato-cucumber-sandwich-recipe/",
          price: "99",
          __v: 0,
        },
        {
          _id: "65395c0a6786649d788e2196",
          dish: "Veg Grilled  SANDWITCH ",
          imageUrl:
            " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY12CUcn7JSi-8jh-n0wEz3iCsPK8qh0YkJmeXKnkV&s",
          recipe:
            "  https://www.indianhealthyrecipes.com/bombay-veg-grilled-sandwich-recipe/",
          price: "79",
          __v: 0,
        },
        {
          _id: "65395ce36786649d788e2198",
          dish: "Paneer SANDWITCH ",
          imageUrl:
            " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJjk7Iq18ob27OjuBRFdRicq3uvuOH1s9D6h54dtT8NA&s",
          recipe: " https://www.indianhealthyrecipes.com/paneer-sandwich/",
          price: "109",
          __v: 0,
        },
        {
          _id: "65395d516786649d788e219a",
          dish: "Paneer Bhurji  SANDWITCH ",
          imageUrl:
            "https://img.freepik.com/premium-photo/paneer-bhurji-sandwich-is-tasty-paneer-based-dish-made-with-cottage-cheese-served-with-fresh-tomato-ketchup-green-mint-chutney-selective-focus_466689-30320.jpg",
          recipe:
            "https://www.indianhealthyrecipes.com/paneer-bhurji-sandwich-recipe/",
          price: "99",
          __v: 0,
        },
        {
          _id: "6539631a762c7ab2a16eca71",
          dish: "Curd Sandwitch",
          imageUrl:
            " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEK-yUK6VzE9jZ8ib6MDuhrToW4xj5DK0oZ48p7Z95ZQ&s",
          recipe: " https://www.indianhealthyrecipes.com/yogurt-sandwich/",
          price: "89",
          __v: 0,
        },
        {
          _id: "6539634d762c7ab2a16eca73",
          dish: "Veg Mayonese  Sandwitch",
          imageUrl: " https://i.ytimg.com/vi/Hu04iE34H1k/maxresdefault.jpg",
          recipe:
            " https://www.indianhealthyrecipes.com/veg-mayonnaise-sandwich-recipe/",
          price: "119",
          __v: 0,
        },
        {
          _id: "6539638b762c7ab2a16eca75",
          dish: "Grilled Cheese Sandwitch",
          imageUrl:
            "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMHNhbmR3aWNofGVufDB8fDB8fHww&w=1000",
          recipe:
            "https://www.indianhealthyrecipes.com/cheese-sandwich-recipe/",
          price: "109",
          __v: 0,
        },
        {
          _id: "653963bf762c7ab2a16eca77",
          dish: "Veg Cheese Sandwitch",
          imageUrl:
            "https://th.bing.com/th/id/OIP.lCkGsYX5oDlVVfJ45xrs-QHaE8?pid=ImgDet&rs=1",
          recipe:
            "https://www.indianhealthyrecipes.com/veg-cheese-sandwich-recipe/",
          price: "99",
          __v: 0,
        },
        {
          _id: "653963f9762c7ab2a16eca79",
          dish: "Urdaburger",
          imageUrl:
            "https://img.freepik.com/premium-photo/delicious-urdaburger-with-crunchy-exterior-oozing-with-melted-cheese_670421-9951.jpg",
          recipe: " https://www.foodandwine.com/recipes/urdaburger/",
          price: "89",
          __v: 0,
        },
        {
          _id: "65396428762c7ab2a16eca7b",
          dish: "Ultimate Veggie Burgers",
          imageUrl:
            " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyomr5ma3anRNwB8ADCw3gp1jwV3nvJa1StO5Xe5nz&s",
          recipe: "https://www.foodandwine.com/recipes/ultimate-veggie-burgers",
          price: "79",
          __v: 0,
        },
        {
          _id: "65396463762c7ab2a16eca7d",
          dish: "Chilli Burger ",
          imageUrl:
            " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhx4gz5FgAWLcdmF5NRM6ms7i35wOch8kzUliAj9jLA&s",
          recipe:
            "https://www.foodandwine.com/comfort-food/burgers/burger-recipes",
          price: "59",
          __v: 0,
        },
        {
          _id: "6539649c762c7ab2a16eca7f",
          dish: "Aalu Tikki Burger ",
          imageUrl:
            " https://www.shutterstock.com/image-photo/red-hot-chili-cheeseburger-spicy-260nw-357029939.jpg",
          recipe: " https://www.vegrecipesofindia.com/aloo-tikki-burger/",
          price: "49",
          __v: 0,
        },
        {
          _id: "653964da762c7ab2a16eca81",
          dish: "Paneer Burger ",
          imageUrl:
            " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwInmhMRBV6BNcwIJpRLfccDhRBtZeCmYu9TxRGl2P&s",
          recipe:
            " https://hebbarskitchen.com/tawa-masala-paneer-burger-recipe/",
          price: "79",
          __v: 0,
        },
        {
          _id: "65396510762c7ab2a16eca83",
          dish: "Minetta Burger ",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSso30EvJJi8mVa6d9PUIJPwdyasTdXy_O-yLDmmeA2YQ&s",
          recipe: " https://www.foodandwine.com/recipes/minetta-burger",
          price: "99",
          __v: 0,
        },
        {
          _id: "65396557762c7ab2a16eca85",
          dish: "Chicken Burger ",
          imageUrl:
            " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lRQp3h5dEOMSIRhUhhAWAf3BH7ZWWLvJdpmcUghn&s",
          recipe: " https://www.foodandwine.com/recipes/chicken-burgers",
          price: "119",
          __v: 0,
        },
        {
          _id: "6539fbcfe824f2764e5f1a85",
          dish: "Vegeterian Chow  - Mein",
          imageUrl:
            "https://images.unsplash.com/photo-1617622141675-d3005b9067c5?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFra2ElMjBub29kbGVzfGVufDB8fDB8fHww&w=1000",
          recipe: "https://www.indianhealthyrecipes.com/hakka-noodles-recipe/",
          price: "99",
          __v: 0,
        },
        {
          _id: "6539fc8fe824f2764e5f1a87",
          dish: "Hakka Noodles",
          imageUrl:
            "https://images.unsplash.com/photo-1617622141675-d3005b9067c5?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFra2ElMjBub29kbGVzfGVufDB8fDB8fHww&w=1000",
          recipe: "https://www.indianhealthyrecipes.com/hakka-noodles-recipe/",
          price: "109",
          __v: 0,
        },
        {
          _id: "6539fcb5e824f2764e5f1a89",
          dish: "Chicken Noodles",
          imageUrl:
            " https://img.freepik.com/free-photo/udon-noodles-with-chicken-peppers-japanese-cuisine_2829-11269.jpg",
          recipe: " https://www.indianhealthyrecipes.com/hakka-noodles-recipe/",
          price: "139",
          __v: 0,
        },
        {
          _id: "6539fcdee824f2764e5f1a8b",
          dish: "Lo Mein Noodles ",
          imageUrl:
            "https://media.istockphoto.com/id/1172590963/photo/homemade-beef-lo-mein-noodles.jpg?s=612x612&w=0&k=20&c=bRRZ8l7ZBYqr2EotisT3GGJ8W_w9IMR4tYbpySD5yCA=",
          recipe: " https://www.recipetineats.com/lo-mein-noodles/",
          price: "119",
          __v: 0,
        },
        {
          _id: "6539fd30e824f2764e5f1a8d",
          dish: "Chinese Noodles  ",
          imageUrl:
            " https://media.istockphoto.com/id/1095319880/photo/chinese-noodles-with-braised-pork-chop.jpg?s=612x612&w=0&k=20&c=9UmfqOEmEDzNAmY5Pg-9UjVUsMqtv802aovfRwkOWEE=",
          recipe:
            "  https://recipes.timesofindia.com/recipes/chinese-noodles/rs52566811.cms",
          price: "99",
          __v: 0,
        },
        {
          _id: "6539fd77e824f2764e5f1a8f",
          dish: "Fried Noodles  ",
          imageUrl:
            " https://media.istockphoto.com/id/1403179775/photo/chinese-style-fried-noodles.jpg?s=612x612&w=0&k=20&c=HrlOun6Yg5g-tEtseceJaEgi-CLJbXt6NB3SvVvO-qg=",
          recipe: "  https://myfoodstory.com/crispy-fried-noodles-recipe/",
          price: "99",
          __v: 0,
        },
        {
          _id: "6539fddfe824f2764e5f1a91",
          dish: "Plain Chowmein ",
          imageUrl:
            " https://khinskitchen.com/wp-content/uploads/2023/02/plain-chow-mein-02.jpg",
          recipe: " https://mymorningmocha.com/plain-chow-mein/",
          price: "79",
          __v: 0,
        },
        {
          _id: "6539fe4ee824f2764e5f1a93",
          dish: "Virgin Cranberry Basil Sangria MOCTAIL",
          imageUrl:
            " https://hips.hearstapps.com/hmg-prod/images/20191204-cranberry-basil-sangria-virgin-delish-ehg-5852-1585755370.jpg?crop=0.9334315892901007xw:1xh;center,top&resize=980:*",
          recipe:
            " https://www.delish.com/entertaining/g3289/mocktail-recipes/?slide=1",
          price: "79",
          __v: 0,
        },
        {
          _id: "6539fe79e824f2764e5f1a95",
          dish: "Dalgona Coffee",
          imageUrl:
            "https://hips.hearstapps.com/hmg-prod/images/dalgona-1648044237.jpg?crop=0.8746038931643277xw:1xh;center,top&resize=980:*",
          recipe:
            " https://www.delish.com/entertaining/g3289/mocktail-recipes/?slide=12",
          price: "69",
          __v: 0,
        },
        {
          _id: "6539fec4e824f2764e5f1a97",
          dish: "Wassail ",
          imageUrl:
            "https://bing.com/th?id=OSK.2cab5097da74228d082876b17ccb0e76",
          recipe:
            "https://www.delish.com/entertaining/g3289/mocktail-recipes/?slide=2",
          price: "59",
          __v: 0,
        },
        {
          _id: "6539feece824f2764e5f1a99",
          dish: "Horchata",
          imageUrl:
            " https://hips.hearstapps.com/hmg-prod/images/horchata-1648564504.jpeg?crop=0.447xw:1.00xh;0.284xw,0&resize=980:*",
          recipe:
            " https://www.delish.com/entertaining/g3289/mocktail-recipes/?slide=3",
          price: "79",
          __v: 0,
        },
        {
          _id: "6539ff41e824f2764e5f1a9b",
          dish: "Blackberry Virgin Mojito",
          imageUrl:
            " https://hips.hearstapps.com/hmg-prod/images/20191120-blackberry-virgin-mojito-delish-ehg-4728-1583519572.jpg?crop=0.9334315892901007xw:1xh;center,top&resize=980:*",
          recipe:
            " https://www.delish.com/entertaining/g3289/mocktail-recipes/?slide=4",
          price: "59",
          __v: 0,
        },
        {
          _id: "6539ff6de824f2764e5f1a9d",
          dish: "Vegan Eggnog",
          imageUrl:
            "  https://hips.hearstapps.com/hmg-prod/images/vegan-eggnog2-1668724656.jpg?crop=0.9057971014492754xw:1xh;center,top&resize=980:*",
          recipe:
            " https://www.delish.com/entertaining/g3289/mocktail-recipes/?slide=5",
          price: "89",
          __v: 0,
        },
        {
          _id: "6539ffcae824f2764e5f1a9f",
          dish: "Triple Berry Sparklers",
          imageUrl:
            "  https://hips.hearstapps.com/hmg-prod/images/triple-berry-sparklers-1647986138.jpg?crop=0.9332711152589828xw:1xh;center,top&resize=980:*",
          recipe:
            "https://www.delish.com/entertaining/g3289/mocktail-recipes/?slide=6",
          price: "89",
          __v: 0,
        },
        {
          _id: "653a0083e824f2764e5f1aa1",
          dish: "Copycat Starbucks Caramel Frappuccino",
          imageUrl:
            "  https://hips.hearstapps.com/hmg-prod/images/copycat-starbucks-caramel-frappuccino3-1659463631.jpg?crop=0.9997369113391213xw:1xh;center,top&resize=980:*",
          recipe:
            "https://www.delish.com/entertaining/g3289/mocktail-recipes/?slide=7",
          price: "69",
          __v: 0,
        },
        {
          _id: "653a00efe824f2764e5f1aa3",
          dish: "Apple Cider Slushies",
          imageUrl:
            " https://hips.hearstapps.com/hmg-prod/images/apple-cider-slushies-1647980396.jpg?crop=1xw:0.9998263285863147xh;center,top&resize=980:*",
          recipe:
            " https://www.delish.com/entertaining/g3289/mocktail-recipes/?slide=8",
          price: "69",
          __v: 0,
        },
        {
          _id: "653a0148e824f2764e5f1aa5",
          dish: "Shirley Temple",
          imageUrl:
            " https://hips.hearstapps.com/hmg-prod/images/20191115-shirley-temple-delish-ehg-4460-1585335880.jpg?crop=0.9334315892901007xw:1xh;center,top&resize=980:*",
          recipe:
            " https://www.delish.com/entertaining/g3289/mocktail-recipes/?slide=9",
          price: "79",
          __v: 0,
        },
        {
          _id: "653a01a9e824f2764e5f1aa7",
          dish: "Virgin Pi a Colada",
          imageUrl:
            "  https://hips.hearstapps.com/hmg-prod/images/virgin-pina-colada-1647986276.jpeg?crop=0.668xw:1.00xh;0.0850xw,0&resize=980:*",
          recipe:
            " https://www.delish.com/entertaining/g3289/mocktail-recipes/?slide=11",
          price: "99",
          __v: 0,
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Container className="mt-4">
          <Row className="mt-4">
            {this.state.articles.map((article, index) => {
              return (
                <Col key={index} className="col-height">
                  <Card style={{ width: "15rem" }}>
                    <Card.Img
                      className="menus-img-h"
                      variant="top"
                      src={article.imageUrl}
                    />
                    <Card.Body>
                      <Card.Title>{article.dish}</Card.Title>
                      <Card.Text>Rs : {article.price}</Card.Text>
                      <a href={article.recipe} className={"btn btn-success"}>
                        Read
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default Menu;
