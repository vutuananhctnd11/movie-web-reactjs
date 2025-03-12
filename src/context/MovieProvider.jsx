import { createContext } from "react";
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "react-multi-carousel/lib/styles.css";
import Modal from 'react-modal';
import YouTube from 'react-youtube';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

const MovieContext = createContext();

const MovieProvider = ({children}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [trailerKey, setTrailerKey] = useState("");

    const handleTrailer = async (id) => {
        setTrailerKey("");
        try {
          const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
            }
          };
    
          const movieKey = await fetch(url, options);
          const data = await movieKey.json();
          setTrailerKey(data.results[0].key);
          setIsOpen(true);
    
        } catch (error){
          setIsOpen(false);
          console.log(error);
        }
    }

    return (
        <MovieContext.Provider value={{handleTrailer}}>
            {children}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                style={{
                overlay: {
                    position: 'fixed',
                    zIndex: 9999,
                },
                content: {
                    top: '50%',
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                },
                }}
                contentLabel="Example Modal"
            >
                <YouTube videoId={trailerKey} opts={opts}/>;
            </Modal>
        </MovieContext.Provider>
    )
}

MovieProvider.PropTypes = {
    children: PropTypes.node,
}
export {MovieProvider, MovieContext}