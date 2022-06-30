import { Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box'
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button"

export default function outfitDisplay() {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
        }}>
            <Box>
                <Paper sx={{
                    m: 1,
                    width: 150,
                    height: 150,
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: '10px',
                    alignItems:'center',
                    justifyContent: 'center'
                }}>
                    <Box >
                        <img src={randomTop()} style={{ height: "60px" }} />
                    </Box>

                    <Box>
                        <img src={randomBottom()} style={{ height: "60px" }} />
                    </Box>
                    <Box>
                        <img src={randomShoes()} style={{ height: "60px" }} />
                    </Box>
                </Paper>
                <Button> Choose this look </Button>
            </Box>


            <Box>
                <Paper sx={{
                    m: 1,
                    width: 150,
                    height: 150,
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: '10px',
                    alignItems:'center',
                    justifyContent: 'center'
                }}>
                    <Box >
                        <img src={randomTop()} style={{ height: "60px" }} />
                    </Box>

                    <Box>
                        <img src={randomBottom()} style={{ height: "60px" }} />
                    </Box>
                    <Box>
                        <img src={randomShoes()} style={{ height: "60px" }} />
                    </Box>
                </Paper>
                <Button> Choose this look </Button>
            </Box>

            <Box>
                <Paper sx={{
                    m: 1,
                    width: 150,
                    height: 150,
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: '10px',
                    alignItems:'center',
                    justifyContent: 'center'
                }}>
                    <Box >
                        <img src={randomTop()} style={{ height: "60px" }} />
                    </Box>

                    <Box>
                        <img src={randomBottom()} style={{ height: "60px" }} />
                    </Box>
                    <Box>
                        <img src={randomShoes()} style={{ height: "60px" }} />
                    </Box>
                </Paper>
                <Button> Choose this look </Button>
            </Box>
            <Box>
                <Paper sx={{
                    m: 1,
                    width: 150,
                    height: 150,
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: '10px',
                    alignItems:'center',
                    justifyContent: 'center'
                }}>
                    <Box >
                        <img src={randomTop()} style={{ height: "60px" }} />
                    </Box>

                    <Box>
                        <img src={randomBottom()} style={{ height: "60px" }} />
                    </Box>
                    <Box>
                        <img src={randomShoes()} style={{ height: "60px" }} />
                    </Box>
                </Paper>
                <Button> Choose this look </Button>
            </Box>
            <Box>
                <Paper sx={{
                    m: 1,
                    width: 150,
                    height: 150,
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: '10px',
                    alignItems:'center',
                    justifyContent: 'center'
                }}>
                    <Box >
                        <img src={randomTop()} style={{ height: "60px" }} />
                    </Box>

                    <Box>
                        <img src={randomBottom()} style={{ height: "60px" }} />
                    </Box>
                    <Box>
                        <img src={randomShoes()} style={{ height: "60px" }} />
                    </Box>
                </Paper>
                <Button> Choose this look </Button>
            </Box>
        </Box>
    )
}

function randomTop() {
    let outfitLink = "https://storage.googleapis.com/ai-co-creation-images/top/";

    let numberOfImages = 3;

    let randomNumber = Math.floor((Math.random() * numberOfImages) + 1);
    let imageName = randomNumber.toString().concat(".jpg")

    //curl -X GET -H "Authorization: Bearer OAUTH2_TOKEN" \ "https://storage.googleapis.com/storage/v1/b/BUCKET_NAME/o"

    let link = outfitLink.concat(imageName);
    return link;
}

function randomBottom() {
    let outfitLink = "https://storage.googleapis.com/ai-co-creation-images/bottom/";

    let numberOfImages = 10;

    let randomNumber = Math.floor((Math.random() * numberOfImages) + 1);
    let imageName = randomNumber.toString().concat(".jpg")
    let link = outfitLink.concat(imageName);
    return link;
}

function randomShoes() {
    let outfitLink = "https://storage.googleapis.com/ai-co-creation-images/shoes/";
    let numberOfImages = 7;
    let randomNumber = Math.floor((Math.random() * numberOfImages) + 1);
    let imageName = randomNumber.toString().concat(".jpg")
    let link = outfitLink.concat(imageName);
    return link;
}