const users = [{
    id:1,
    name: "Shima",
},
{
    id:2,
    name: "Deepa",
}]

const getUserById = async (id) => {
    //find user by filter
//  users.filter((user, index) => {
//      console.log(user);
//      return user.id === id})

//find user by for if
// let foundUser = null;
// for(const user of users){
//     //console.log(user) yo rkhada chai sabai print huncha
//     if(user.id === id){
//         foundUser = user;
//     }
// }
// console.log(foundUser);

//using find
const result = users.find((user, index) =>{
    return user.id === id;
})
console.log(result);
};
const updateName = (id, name) => {
    const user = getUserById(id);
    console.log("before changes:", user);
    if (user) {
        user.name =name;
        console.log("after changes:", user);
    }
}
updateName(2, "Deepa");

//getUserById(1);// selective number b=matra print huncha

//fine and filter difference 
//filter each element TRUE cha ki nai check garcha fine le chai jun paila vtcha tei result print garcha filter le Arrray return garcha Fine le chai first datatype jun match huncha tei rakhcha

//annoymoums function name deyena vani ani auto call function ko lagi 
(function(){ //we can use only => too like (() => {..})
console.log("hello world");

});
//race chito promise excute huni lai run garcha
