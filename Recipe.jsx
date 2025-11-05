
export default function Recipe(data) {

    return (
        <div className="recipe-container">
            <header className="recipe-header">
                <h2>{data.RecipeName}</h2>
                <p>{data.Time}</p>
            </header>
            <section className="recipe-details">
               <div>
                 <p>{data.Serving}</p>
                <p>{data.Difficulty} </p>
                <p>{data.  Type}</p>
               </div>
                <img className="foodImage"
                src={data.img} alt="chai image" />
            </section>
            <footer className="recipe-footer">
                <small>{data.Note}</small>
            </footer>
        </div>
    );
}

