import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
       items:[
           {
               id: 1,
               title: 'Big Mac',
               price: 2,
               image: "https://www.mcdonalds.com.tr/Files/Urunler-Kare/7422dbf9-200d-40c3-9fcf-338b27888d63-bigmactek.png",
               amount:0
           },
           {
               id: 2,
               title: 'Flip Flops',
               price: 3,
               image: "https://koalabay.com/12674-large_default/havaianas-brasil-blue-flip-flops.jpg",
               amount:0
           },
           {
               id: 3,
               title: 'Coca-Cola Pack',
               price: 5,
               image: 'https://d3lbhvavid9616.cloudfront.net/assets/products/53207/1583192707404.jpg',
               amount:0
           },
           {
               id: 4,
               title: 'Movie Ticket',
               price: 12,
               image: 'https://i.pinimg.com/originals/63/a3/7b/63a37bb3b3350ea831a0e0d9fe634bfe.jpg',
               amount:0
           },
           {
               id: 5,
               title: 'Book',
               price: 15,
               image: 'https://i.dr.com.tr/cache/600x600-0/originals/0001848621001-1.jpg',
               amount:0
           },
           {
               id: 6,
               title: 'Lobster Dinner',
               price: 45,
               image: 'https://static.onecms.io/wp-content/uploads/sites/37/2020/11/20/boiled-lobster-RU317919.jpg',
               amount:0
           },
           {
               id: 7,
               title: 'Video Game',
               price: 60,
               image: 'https://www.log.com.tr/wp-content/uploads/2019/06/super-mario-battle-royale-1280x720.jpg',
               amount:0
           },
           {
               id: 8,
               title: 'Amazon Echo',
               price: 99,
               image: 'https://m.media-amazon.com/images/I/61yI7vWa83L._AC_SY450_.jpg',
               amount:0
           },
           {
               id: 9,
               title: 'Year of Netflix',
               price: 100,
               image: 'https://gazete.firat.edu.tr/wp-content/uploads/2021/03/netflix.png',
               amount:0
           },
           {
               id: 10,
               title: 'Air Jordans',
               price: 125,
               image: 'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/487c4340-ee8e-462f-8166-70b0815bf6dc/women-s-air-jordan-1-zoom-air-comfort-gym-red-ct0979-610-release-date.jpg',
               amount:0
           },
           {
               id: 11,
               title: 'Airpods',
               price: 199,
               image: 'https://cdn.cimri.io/image/1000x1000/appleairpodsnesilmvntuabluetoothkulaklk_245278684.jpg',
               amount:0
           },
           {
               id: 12,
               title: 'Gaming Console',
               price: 299,
               image: 'https://m.media-amazon.com/images/I/61r7rNZ1Z4L._SX466_.jpg',
               amount:0
           },
           {
               id: 13,
               title: 'Drone',
               price: 350,
               image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_86614384/mobile_786_587_png/DJI-Mini-2-Fly-More-Combo-Drone-Gri',
               amount:0
           },
           {
               id: 14,
               title: 'Smartphone',
               price: 699,
               image: 'https://sc04.alicdn.com/kf/Hacec76210d9a448ca5dd2fd46b9411c0X.jpg',
               amount:0
           },
           {
               id: 15,
               title: 'Bike',
               price: 800,
               image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFQoK5fdwtB_RHks2lWyex1gfKhTGgbd4Sw&usqp=CAU',
               amount:0
           },
           {
               id: 16,
               title: 'Kitten',
               price: 1500,
               image: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
               amount:0
           },
           {
               id: 17,
               title: 'Puppy',
               price: 1500,
               image: 'https://media.istockphoto.com/photos/sweet-puppy-with-human-picture-id803953138?k=20&m=803953138&s=612x612&w=0&h=BMLYkLGqn_BcJmoqeBwsS1w28Inca8loORG7xIoArMc=',
               amount:0
           },
           {
               id: 18,
               title: 'Auto Rickshaw',
               price: 2300,
               image: 'https://media.istockphoto.com/photos/yellow-auto-rickshaw-picture-id636965158',
               amount:0
           },
           {
               id: 19,
               title: 'Horse',
               price: 2500,
               image: 'https://www.collinsdictionary.com/images/full/horse_84139573.jpg',
               amount:0
           },
           {
               id: 20,
               title: 'Acre of Farmland',
               price: 3000,
               image: 'https://www.bilecikhaber.com.tr/d/news/45537.jpg',
               amount:0
           },
           {
               id: 21,
               title: 'Designer Handbag',
               price: 5500,
               image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pre-fall-bags-072820b-1596125759.jpg?crop=0.364xw:0.728xh;0.319xw,0.212xh&resize=640:*',
               amount:0
           },
           {
               id: 22,
               title: 'Hot Tub',
               price: 6000,
               image: 'https://bjs.scene7.com/is/image/bjs/79558?$bjs-Zoom$',
               amount:0
           },
           {
               id: 23,
               title: 'Luxury Wine',
               price: 7000,
               image: 'https://thumbor.forbes.com/thumbor/711x471/https://specials-images.forbesimg.com/imageserve/489756813/LIFESTYLE-FRANCE-LUXURY-HOTEL-RENOVATION/960x0.jpg?fit=scale',
               amount:0
           },
           {
               id: 24,
               title: 'Diamond Ring',
               price: 10000,
               image: 'https://ae01.alicdn.com/kf/Hf90cad24e72541bf9a5f2322ca34387fG/90-OFF-Luxury-Female-Small-Lab-Diamond-Ring-Real-925-Sterling-Silver-Engagement-Ring-Solitaire-Wedding.jpg',
               amount:0
           },
           {
               id: 25,
               title: 'Jet Ski',
               price: 12000,
               image: 'https://www.log.com.tr/wp-content/uploads/2019/09/uzun-kullanim-suresiyle-dikkat-ceken-elektrikli-jet-ski-taiga-motors-orca-8-1280x720.jpg',
               amount:0
           },
           {
               id: 26,
               title: 'Rolex',
               price: 15000,
               image: 'https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0008_m124060-0001-submariner_portrait.jpg?imwidth=420',
               amount:0
           },
           {
               id: 27,
               title: 'Ford F-150',
               price: 30000,
               image: 'https://cdn.motor1.com/images/mgl/WpjRL/s1/2021-ford-f-150.jpg',
               amount:0
           },
           {
               id: 28,
               title: 'Tesla',
               price: 75e3,
               image: 'https://cdn.motor1.com/images/mgl/VA0z9/s3/tesla-roadster.jpg',
               amount:0
           },
           {
               id: 29,
               title: 'Monster Truck',
               price: 15e4,
               image: 'https://images.buyagift.co.uk/common/client/Images/Product/Extralarge/en-GB/LeisurePursuits_AmericanMonsterTruck1.JPG',
               amount:0
           },
           {
               id: 30,
               title: 'Ferrari',
               price: 25e4,
               image: 'https://i01.sozcucdn.com/wp-content/uploads/2020/09/13/iecrop/thumbnail_ferrari-sf90_stradale-2020-1600-08_16_9_1600030942-670x371.jpg',
               amount:0
           },
           {
               id: 31,
               title: 'Single Family Home',
               price: 3e5,
               image: 'https://www.hartfordbusiness.com/sites/default/files/styles/article_small_cover_image/public/indesign-import/images/RentalHome_opt.jpg?itok=t5IqE22O',
               amount:0
           },
           {
               id: 32,
               title: 'Gold Bar',
               price: 7e5,
               image: 'https://image.klasgame.com/klasgame/ilan/05-2020/gold-bar-satis-10-gb-151183-2020-05-31-23-02-1.jpg',
               amount:0
           },
           {
               id: 33,
               title: 'McDonalds Franchise',
               price: 15e5,
               image: 'data:image/png;base64,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',
               amount:0
           },
           {
               id: 34,
               title: 'Superbowl Ad',
               price: 525e4,
               image: 'https://www.uzayspor.com/qazed2foto/500/spalding-american-futbol-topu-1.JPG',
               amount:0
           },
           {
               id: 35,
               title: 'Yacht',
               price: 75e5,
               image: 'https://i.ytimg.com/vi/G_IQwt9ceN8/maxresdefault.jpg',
               amount:0
           },
           {
               id: 36,
               title: 'M1 Abrams',
               price: 8e6,
               image: 'https://i.imgur.com/pQ5GHLq.jpeg',
               amount:0
           },
           {
               id: 37,
               title: 'Formula 1 Car',
               price: 15e6,
               image: 'https://cdn-1.motorsport.com/images/amp/0mbGpWM2/s6/2022-f1-car-1.jpg',
               amount:0
           },
           {
               id: 38,
               title: 'Apache Helicopter',
               price: 31e6,
               image: 'https://www.army-technology.com/wp-content/uploads/sites/3/2020/07/34-2.jpg',
               amount:0
           },
           {
               id: 39,
               title: 'Mansion',
               price: 45e6,
               image: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2013/08/26/100987825-121017_EJ_stone_mansion_0014r.1910x1000.jpg',
               amount:0
           },
           {
               id: 40,
               title: 'Make a Movie',
               price: 1e8,
               image: 'https://im.haberturk.com/tv_program/2021/08/14/ver11111/920432_620x349.jpg?v=1628841979',
               amount:0
           },
           {
               id: 41,
               title: 'Boeing 747',
               price: 148e6,
               image: 'data:image/jpeg;base64,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',
               amount:0
           },
           {
               id: 42,
               title: 'Mona Lisa',
               price: 780000000,
               image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1374px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
               amount:0
           },
           {
               id: 43,
               title: 'Skyscraper',
               price: 85e7,
               image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/1200px-Burj_Khalifa.jpg',
               amount:0
           },
           {
               id: 44,
               title: 'Cruise Ship',
               price: 93e7,
               image: 'https://static.dw.com/image/54315019_403.jpg',
               amount:0
           },
           {
               id: 45,
               title: 'NBA Team',
               price: 2120000000,
               image: 'https://www.uzayspor.com/qazed2foto/500/splading-nba-1.JPG',
               amount:0
           },
       ],
        money:100000000000
    },
    reducers: {
        increment: (state,action) =>{
            // const {id} = action.payload
            // const temp = state.items.find((item)=>item.id !== id)
            // console.log(temp)

        },
        decrement: (state,action) =>{
            state.items.amount -=1
        },
        incrementByAmount : (state,action)=>{
            state.items.amount += action.payload
        }
    },
})

export const {increment, decrement, incrementByAmount} = productsSlice.actions

export default productsSlice.reducer;
