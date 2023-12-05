
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import topNews4 from '@/assets/Rectangle 9.png';
import Image from "next/image";

const SideBar = () => {
    return (
        <Box className="my-5">
                     <Card>
      <CardActionArea>
        <CardMedia>
            <Image src={topNews4} width={800} alt="top news"/>
        </CardMedia>
        <CardContent>
            <p className="w-[100px] bg-red-500 text-center p-1 rounded-md my-4 text-white">Technology</p>
          <Typography gutterBottom variant="h5" component="div">
          Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography gutterBottom className="py-2">
          By Awlad Hossain - Mar 18 2023
          </Typography>
          <Typography variant="body2" color="text.secondary">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Box>
    );
};

export default SideBar;