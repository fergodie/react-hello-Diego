import React from "react";

function Card() {
    return (
        <div class="card" style={{width: 300}}>
            <img src="https://picsum.photos/200" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
        </div>

    );
}

export default Card;