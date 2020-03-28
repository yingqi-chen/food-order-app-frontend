import React from 'react'

const FavoritesContainer = ({favorites,renderListDisplayer,total}) => {
    return (
      <div className="container Favorites-lists">
         <h3>My previous Favorites</h3>
         {renderListDisplayer(favorites)}
      </div>
    )
  }



export default FavoritesContainer