import React from "react";

const NewSongForm = () => {
   return (
      <form>
         <label>Song name</label>
         <input type="text" required />
         <input type="submit" value="add a song" />
     </form>
  );
}

export default NewSongForm;
