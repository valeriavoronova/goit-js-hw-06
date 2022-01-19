

const itemsRef = document.querySelectorAll('.item');

console.log("Number of categories:", itemsRef.length);



const titleRef = document.querySelectorAll("h2");

    // for(const text of titleRef){
    //         console.log("\nCategory:",text.textContent);
    //         console.log("Elements:",text.nextElementSibling.children.length);

    //     }

titleRef.forEach((currentValue) => { 
    console.log("\nCategory:",currentValue.textContent);
    console.log("Elements:",currentValue.nextElementSibling.children.length);
})






