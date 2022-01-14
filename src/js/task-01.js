

const itemsRef = document.querySelectorAll('.item');

console.log("Number of categories:", itemsRef.length);



const titleRef = document.querySelectorAll("h2");

    for(const text of titleRef){
            console.log("\nCategory:",text.textContent);
            console.log("Elements:",text.nextElementSibling.children.length);

        }






