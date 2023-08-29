import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import BasicCard from '../../Components/Categoriescard';
import Grid from '@mui/material/Grid';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (

     

     
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={2}>

            </Grid>
      

            
     <Grid xs={8}>
             
    <div>
        <Typography gutterbottom variant='h5' component="div"
        sx={{textAlign:"center",
        color:"darkorange",
        fontFamily:"raleway",
        fontWeight:"770",
        marginBottom:"10px",
        marginTop:"10px"
    }}
          >Our Wide Range of Product Categories</Typography>
          {/* <div style={{ 
            justifyContent:"center",
            alignItems: 'center',display: 'flex',
          }}> */}

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">

          <Typography> Safety & PPE Supplies </Typography>
        </AccordionSummary>
        

        <AccordionDetails>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/05/82/22/72/240_F_582227263_3e6aG2CwHm53ShqywUAhpMf8FZhO7fLS.jpg"
    heading="Safety Shoes"
    />
          </Grid>

          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/05/90/74/90/240_F_590749025_nkEOqP1l6EvjyQZhDnduUw1NnTAtsUss.jpg"
    heading="Safety Helmets"
    />
          </Grid>

          <Grid item xs={4}>
          <BasicCard 
    image="https://as2.ftcdn.net/v2/jpg/03/51/52/61/1000_F_351526174_EJSazJjyd12klMvuOc6ZkTqpmnvN0Na4.jpg"
    heading="Fall Protection "
    />
          </Grid>

          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/05/61/53/76/240_F_561537683_UvnOaE3F3ugsaxCjpYBaGouI2SMLoGvi.jpg"
    heading="Safety Gloves"
    />
          </Grid>


          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/03/74/80/05/240_F_374800578_8coxXUllrKtbrqxlTBHwogb0WfvEL9DK.jpg"
    heading="Respiratory Masks"
    />
          </Grid>


          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/04/06/25/03/240_F_406250382_Gh4UIIAqZJjEKdc6uLwmf3QxqZmXT7Ua.jpg"
    heading="Safety Jackets"
    />
          </Grid>



          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/04/10/32/14/240_F_410321402_uu46OX2pCBhmtC1Lsy4qjZS5x5rw06Lk.jpg"
    heading="Safety Signs & Signals"
    />
          </Grid>


          


          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/04/76/58/56/240_F_476585679_8uq5ChkQXich5U8I8DnyhVJ4Kn8c5boU.jpg"
    heading="Traffic Safety"
    />
          </Grid>


          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/00/55/90/94/240_F_55909472_5fEmP8mAm2sNV42viBfxVsq8yqCJwYJr.jpg"
    heading="Hearing Protection"
    />
          </Grid>


          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/00/65/23/35/240_F_65233599_wnEgGEKmJxxxzKSOq2Dv6Z2EpvQFYt5L.jpg"
    heading="Face Protection"
    />
          </Grid>

          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/04/67/80/52/240_F_467805273_yY3DNk6FvVXidAjQGNDSMqVfcQbUjWqE.jpg"
    heading="Work Wear"
    />
          </Grid>


          </Grid>

        </AccordionDetails>
        </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography> Industrial Tools & Machninery </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/02/90/34/69/240_F_290346916_8os97QFBEY9xtmeIiTt7xIrtUTXbmiql.jpg"
    heading="Power Tools"
    />
          </Grid>

        <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/01/19/24/31/240_F_119243173_u4kmtvxLekusRisbbV9rJaaEsWRHKRf5.jpg"
    heading="Hand Tools"
    />
          </Grid>



          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/02/19/02/37/240_F_219023764_x4GO9aTnDUkxf6yidyO7tXonmJ7I2Hdp.jpg"
    heading="Welding "
    />
          </Grid>


          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/03/97/70/71/240_F_397707191_4BowDKeoRINhbK6h8UhIzox8YAHiC2c6.jpg"
    heading="Material Handling"
    />
          </Grid>



          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/04/16/23/60/240_F_416236080_iUvBR5Z3rpYoCF0SPQF9Tk41uXIDcn8B.jpg"
    heading="Bearings & Power Transmission"
    />
          </Grid>




          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/02/92/72/91/240_F_292729186_JjQqKKXdBJAgqQVrzBDwJZNCqh6dQ7Va.jpg"
    heading="Abrasives"
    />
          </Grid>



          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/04/48/48/34/240_F_448483449_BOgRmVvPlc52Euo2vVCgtcpG2ZWysm0z.jpg"
    heading="Pneumatics"
    />
          </Grid>



          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/00/82/26/31/240_F_82263145_ileEZAdzH62kC1heFapQmfbO7azXBbxj.jpg"
    heading="Hydraulics"
    />
          </Grid>

          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/05/72/17/73/240_F_572177351_Djj8lZ5breulNrWb29WmuNO4HAuwRXuh.jpg"
    heading="Cutting Tools & Machinery"
    />
          </Grid>



          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/01/58/83/15/240_F_158831597_Y3iwLax26TWshPmmx03WozEB74ged3v2.jpg"
    heading="Industrial Plants & Macheneries"
    />
          </Grid>

          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/02/33/72/03/240_F_233720361_1yqxj8Tkvo69A2Y0h6RBlLtmovpr2uat.jpg"
    heading="Fasteners"
    />
          </Grid>


          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/02/15/68/23/240_F_215682376_g57jOEvZ8izK8wK0JlDJiZUibwayqbUM.jpg"
    heading="Valves"
    />
          </Grid>

          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography> Electical Tools & Equipment </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
          <Grid item xs={4}>
          <BasicCard 
    image="https://img.freepik.com/premium-photo/rendering-electric-water-pum_311470-101.jpg?size=626&ext=jpg&ga=GA1.2.164830262.1685001741&semt=ais"
    heading="Pumps & Motors"
    />
          </Grid>

        <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/01/52/77/05/240_F_152770580_QB4k26Zk5zQQCtFPbJ92JM3AyOsuuIOB.jpg"
    heading="LED & Lightning"
    />
          </Grid>

          <Grid item xs={4}>
          <BasicCard 
    image="https://www.sve.enterprises/static/media/it.85adb7e9bc7816eb913a.jpg"
    heading="Electrical Instruments"
    />
          </Grid>

          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography> Office Stationery & Supplies</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/03/79/61/93/240_F_379619334_FEwWZPLZZc518BdMQcLtGc9DuGemmXQs.jpg"
    heading="General Stationery "
    />
          </Grid>


          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/04/40/07/32/240_F_440073209_G5zCsw04ViEwTwapmeMjendrNaqGODTU.jpg"
    heading="Office Furniture "
    />
          </Grid>


          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/00/86/09/02/240_F_86090219_AgQYqc6e5WTemRT4gUBm9nWGfz3dmBan.jpg"
    heading="Security "
    />
          </Grid>


          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/03/06/99/87/240_F_306998742_5awR6uVsZ8dRNdHHnj0tnm4sGUDBAxQ5.jpg"
    heading="House Keeping"
    />
          </Grid>


          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/03/64/41/07/240_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg"
    heading="IT & Electronics"
    />
          </Grid>


          </Grid>
          
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography> Building & Constuction Supplies</Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/01/99/81/09/240_F_199810981_ASJTsuwwKNLwArWdzLbHUe4YDUCJRKFS.jpg"
    heading="Plumbing & Bathroom Fittings"
    />
          </Grid>

          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/05/43/21/15/240_F_543211583_4NJZ9A062sNs4vtlA1pA09oYL2SbGWEU.jpg"
    heading="Hardware"
    />
          </Grid>



          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/00/81/88/78/240_F_81887818_ipbvkxdwi0ZumGjLbscOipfLs0FlaPp9.jpg"
    heading="Paints & Coatings"
    />
          </Grid>



          </Grid>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography> Measurement & Testing </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/03/88/50/61/240_F_388506139_xOgN8Etv2okLytpSjp8AG16wQIRLVwfJ.jpg"
    heading="Weighing Scales"
    />
          </Grid>

          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/05/93/43/95/240_F_593439577_ntzSLYgXENQT7mfEK4m8fwBU9H1fkNLk.jpg"
    heading="Measuring Precision Tools"
    />
          </Grid>



          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/01/94/70/52/240_F_194705222_TEponA3UPJkqYHFfk3VI99roL7we5k1P.jpg"
    heading="Water Meters "
    />
          </Grid>


          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/05/91/09/91/240_F_591099185_ublOt2INAuyPDlsCAUpni47DJYGNiQn0.jpg"
    heading="Testing Tools"
    />
          </Grid>



          </Grid>
        </AccordionDetails>
      </Accordion>




      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography> Oils & Lubricants </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/02/55/31/92/240_F_255319205_viUZLjQ0TihbK51vS8YXS1kpxjhRFEn1.jpg"
    heading="Industrial Oils"
    />
          </Grid>

          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/03/63/79/56/240_F_363795677_aWyGg1hxUw7HUFKCJM7YfqSVT83HHlBi.jpg"
    heading="Industrial Greases "
    />
          </Grid>



          



          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography> Reagents & Catalysts</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/02/20/77/57/240_F_220775744_dosJCTNpy8zBidOGOZB6Xij2DArGNKRq.jpg"
    heading="Industrial Chemicals"
    />
          </Grid>

          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/05/48/54/87/240_F_548548708_hodxOSmnKLEyMckHXbJcm7WeSR1GAlUu.jpg"
    heading="Industrial Acids"
    />
          </Grid>



          <Grid item xs={4}>
          <BasicCard 
    image="https://as1.ftcdn.net/v2/jpg/02/39/02/36/1000_F_239023615_XQirlmSPCqr0LcouLgcs57ccNGHm2fuP.jpg"
    heading="Industrial Solvents"
    />
          </Grid>

          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/04/17/30/44/240_F_417304464_PDWZc6Wu5ftgH5Qh0vCHhg2vfKe5LHHb.jpg"
    heading="Food Chemicals "
    />
          </Grid>



          </Grid>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography> Iron & Steel Products</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/02/91/80/10/240_F_291801030_Ru6TBwFwoPmCwbpms7beFrcNFg2e0dzH.jpg"
    heading="All types of Sheets"
    />
          </Grid>

          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/01/38/96/20/240_F_138962090_kfVaHPPDVzyr74nHjp5F5ziBm7cTssSS.jpg"
    heading="All types of Rods"
    />
          </Grid>



          <Grid item xs={4}>
          <BasicCard 
    image="https://t4.ftcdn.net/jpg/01/01/62/13/240_F_101621334_9gS31QSWz05XsISdoq7HvwhXEClwvHhu.jpg"
    heading="All types of Pipes & Fittings"
    />
          </Grid>


          <Grid item xs={4}>
          <BasicCard 
    image="https://t3.ftcdn.net/jpg/00/57/53/32/240_F_57533203_GVjGOHZ7XMAHbIn8wM33kpKn1quXFCkM.jpg"
    heading="MS Structural Steel"
    />
          </Grid>



          </Grid>
        </AccordionDetails>
      </Accordion>


        

    </div>
    </Grid>

    <Grid xs={2}>

</Grid>
    
    </Grid>
    
  );
}