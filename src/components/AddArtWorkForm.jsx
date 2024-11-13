function AddArtWorkForm(){
    return(
        <div className="Add-Artwork-form">
            <h2>New ArtWork</h2>
            <form>
                <input type="text" name="name" placeholder="Title of the art" /> 
                <input type="text" name="name" placeholder="Artist" />
                <input type="text" name="image" placeholder="" />
                <input type="text" name="price" placeholder="Price" />
                <button type="submit">Post Art</button>

            </form>

        </div>
    )
}

export default AddArtWorkForm;