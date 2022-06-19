import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import AttributionIcon from '@mui/icons-material/Attribution';

export default function Footer() {
    return (
        <BottomNavigation showLabels style={{position:"absolute", bottom:"0",left:"50%", transform:"translateX(-50%)", paddingBottom:"1rem"}}>
            <BottomNavigationAction label={<div>AI Co-Creation Study 2022 <a href="mailto:study4outfit@gmail.com">study4outfit@gmail.com</a></div>} icon={<AttributionIcon />}>AI Co-Creation 2022</BottomNavigationAction>
        </BottomNavigation>
    )
}
