import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  export interface DialogTitleProps {
    id: string;
    onClose: () => void;
  }

  const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null
        }
      </DialogTitle>
    );
  };

export default function Disclaimer() {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    //function here to store agreement and create new user profile
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Start
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Disclaimer
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Typography gutterBottom>
            Last updated: June 19, 2022
        </Typography>
        
        <Typography gutterBottom>
            Interpretation and Definitions <br></br>
            <hr></hr>
        </Typography>
            Interpretation
            --------------

            The words of which the initial letter is capitalized have meanings defined
            under the following conditions. The following definitions shall have the same
            meaning regardless of whether they appear in singular or in plural.

            Definitions
            -----------

            For the purposes of this Disclaimer:

            * Company (referred to as either "the Company", "We", "Us" or "Our" in this
                Disclaimer) refers to Ivey Business School, 1255 Western Rd, London, ON
                N6G 0N1.
            * Service refers to the Website.
            * You means the individual accessing the Service, or the company, or other
                legal entity on behalf of which such individual is accessing or using the
                Service, as applicable.
            * Website refers to AI Co-creation Study, accessible from
                [aicocreationstudy.com](aicocreationstudy.com)

            Disclaimer
            ==========

            The information contained on the Service is for general information purposes
            only.

            The Company assumes no responsibility for errors or omissions in the contents
            of the Service.

            In no event shall the Company be liable for any special, direct, indirect,
            consequential, or incidental damages or any damages whatsoever, whether in an
            action of contract, negligence or other tort, arising out of or in connection
            with the use of the Service or the contents of the Service. The Company
            reserves the right to make additions, deletions, or modifications to the
            contents on the Service at any time without prior notice. This Disclaimer has
            been created with the help of the [TermsFeed Disclaimer
            Generator](https://www.termsfeed.com/disclaimer-generator/).

            The Company does not warrant that the Service is free of viruses or other
            harmful components.

            External Links Disclaimer
            =========================

            The Service may contain links to external websites that are not provided or
            maintained by or in any way affiliated with the Company.

            Please note that the Company does not guarantee the accuracy, relevance,
            timeliness, or completeness of any information on these external websites.

            Errors and Omissions Disclaimer
            ===============================

            The information given by the Service is for general guidance on matters of
            interest only. Even if the Company takes every precaution to insure that the
            content of the Service is both current and accurate, errors can occur. Plus,
            given the changing nature of laws, rules and regulations, there may be delays,
            omissions or inaccuracies in the information contained on the Service.

            The Company is not responsible for any errors or omissions, or for the results
            obtained from the use of this information.

            Fair Use Disclaimer
            ===================

            The Company may use copyrighted material which has not always been
            specifically authorized by the copyright owner. The Company is making such
            material available for criticism, comment, news reporting, teaching,
            scholarship, or research.

            The Company believes this constitutes a "fair use" of any such copyrighted
            material as provided for in section 107 of the United States Copyright law.

            If You wish to use copyrighted material from the Service for your own purposes
            that go beyond fair use, You must obtain permission from the copyright owner.

            Views Expressed Disclaimer
            ==========================

            The Service may contain views and opinions which are those of the authors and
            do not necessarily reflect the official policy or position of any other
            author, agency, organization, employer or company, including the Company.

            Comments published by users are their sole responsibility and the users will
            take full responsibility, liability and blame for any libel or litigation that
            results from something written in or as a direct result of something written
            in a comment. The Company is not liable for any comment published by users and
            reserves the right to delete any comment for any reason whatsoever.

            No Responsibility Disclaimer
            ============================

            The information on the Service is provided with the understanding that the
            Company is not herein engaged in rendering legal, accounting, tax, or other
            professional advice and services. As such, it should not be used as a
            substitute for consultation with professional accounting, tax, legal or other
            competent advisers.

            In no event shall the Company or its suppliers be liable for any special,
            incidental, indirect, or consequential damages whatsoever arising out of or in
            connection with your access or use or inability to access or use the Service.

            "Use at Your Own Risk" Disclaimer
            ==========

            All information in the Service is provided "as is", with no guarantee of
            completeness, accuracy, timeliness or of the results obtained from the use of
            this information, and without warranty of any kind, express or implied,
            including, but not limited to warranties of performance, merchantability and
            fitness for a particular purpose.

            The Company will not be liable to You or anyone else for any decision made or
            action taken in reliance on the information given by the Service or for any
            consequential, special or similar damages, even if advised of the possibility
            of such damages.

            Contact Us
            ==========

            If you have any questions about this Disclaimer, You can contact Us:

            * By email: study4outfit@gmail.com

        </DialogContent>
        <DialogActions>
            <div style={{marginRight:"20px"}}>I have read the disclaimer</div>
          <Link to="/form" style={{textDecoration:"none"}}><Button variant="contained" color="success" hover autoFocus onClick={handleClose}>
            Agree & continue
          </Button></Link>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

//     return (
//         <div className="disclaimer-div">
//         <Dialog
// 	        modal={false}
// 	        open={open}
// 	        title={
// 			<div>

// 				<img src='https://d30y9cdsu7xlg0.cloudfront.net/png/53504-200.png' style={closeImg}/>
// 			</div>
//             }></Dialog>
//         </div>
        
//     )
// }

// export default Disclaimer;