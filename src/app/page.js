import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideBar from "@/components/ui/SideBar/SideBar";
import SidebarNewsCard from "@/components/ui/SideBar/SideBarNewsCard";
import { Grid } from "@mui/material";


const HomePage = () => {
  return (
    <>
     <Grid container spacing={2}>
  <Grid item xs={8}>
  <LatestNews/>
  </Grid>
  <Grid item xs={4}>
   <SideBar/>
   <SidebarNewsCard/>
  </Grid>
</Grid>
    </>
  );
};

export default HomePage;