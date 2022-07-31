import React from 'react'
import RandomImage from '../RandomImage'
import SponsorForm from '../SponsorForm'
import RandomAds from "../RandomAds";
import {Modal} from '@mui/material';
import {Typography} from '@mui/material';
import {Box} from '@mui/material';
import {useState, useEffect} from 'react';


const Sponsors = (props) => {
    const page = props.currentpage
    const pictureStyling = {
      marginTop: "5%",
      marginBottom: "5%",
      marginRight: "5%",
      marginLeft: "5%",
      border: "3px solid lightgreen",
      borderRadius: "10px"
   }
   const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

    const [modOpen1, setModOpen1] = useState(false);
    const handleOpen1 = () => setModOpen1(true);
    const handleClose1 = () => setModOpen1(false);

    const [modOpen2, setModOpen2] = useState(false);
    const handleOpen2 = () => setModOpen2(true);
    const handleClose2 = () => setModOpen2(false);

    const [modOpen3, setModOpen3] = useState(false);
    const handleOpen3 = () => setModOpen3(true);
    const handleClose3 = () => setModOpen3(false);

    return (
        <div>
            <RandomAds />

            {/* 
            <Modal
              open={modOpen1}
              onClose={handleClose1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={ModalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  One
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Box>
            </Modal>

            <Modal
              open={modOpen2}
              onClose={handleClose2}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={ModalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Two
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Box>
            </Modal>

            <Modal
              open={modOpen3}
              onClose={handleClose3}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={ModalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Three
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Box>
            </Modal>
            */}
            
          <div>
            <h1 style={{ fontSize: 100, color: "#FFC436" }}>
              <center>Sponsors Page</center>
            </h1>
            <div style={{ backgroundColor: "whitesmoke" }}>
              <br />
              <div
              style={{
                backgroundColor: "#115E7C",
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row"
              }}
            >
              <SponsorForm/>
            </div>
            <div
              style={{
                backgroundColor: "green",
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row"
              }}
            >

              {/* src={"https://picsum.photos/id/" + props.page + "/500"} */}
                <RandomImage 
                    description="MacBook with appealing and updated operating system!"
                    webLink="https://www.apple.com/macbook-pro/"
                    page={page * 6}
                    style={pictureStyling}
                  ></RandomImage>
              
              <RandomImage
                  description="Forest with serene hiking trail with numerous attractions along the way!"
                  webLink="https://appalachiantrail.org/explore/hike-the-a-t/thru-hiking/"
                  page={page * 17}
                  style={pictureStyling}
                />
              <RandomImage 
                  description="Tranquil bookstoore with varied selections and book club meetings!"
                  webLink="https://www.barnesandnobleinc.com/"
                  page={page * 24}
                  style={pictureStyling}
                />

            </div>
            </div>
            <div style={{ backgroundColor: "whitesmoke" }}>
              <br />
            </div>
          </div>
        </div>
    )
}

export default Sponsors
