import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import SearchBox from '../../components/SearchBox';
import AppWeeklySales from '../../components/AppWeeklySales';
import AppWebsiteVisits from '../../components/AppWebsiteVisits';
import * as styles from './style.module.scss';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  minHeight: '500px',
  objectFit: 'fit',
  border: '1px solid #888',
  borderRadius: '10px'  
});

export default function CollectionDetail() {
  // const [loading, setLoading] = React.useState(false);
  const params = useParams();
  var img_url = "/image/Pasar.svg";
  let location = useLocation();
  console.log(location);
  // setLoading(false);
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img alt="logo" src="/image/Pasar.svg" width="150px" />
      </div>
      <div className={styles.search}>
        <SearchBox />
      </div>
      <div className={styles.view}>
        <h2>{params.collection}</h2>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <AppWebsiteVisits />
          </Grid>
        </Grid>
        <h2>Collectible Asset</h2>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <CoverImgStyle src={img_url} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <AppWeeklySales />
          </Grid>
        </Grid>
        <div className={styles.content}>
          {/* {loading && (
            <img src="/image/Dual Ring-1s.svg" className={styles.loading} />
          )} */}
          <img src=""/>

        </div>
      </div>
    </div>
  );
}
