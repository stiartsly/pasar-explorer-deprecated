import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './style.module.scss';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Transaction(props) {
  return (
    <div className={styles.container}>
      <Accordion 
        className={styles.accordion}
      >
        <AccordionSummary className={styles.summary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.item_gap1}>
            <img src={props.thumbnail} width="60px" />
          </Typography>        
          <Typography className={styles.item_gap2} style={{textAlign:"left"}}>
            <h4>Name</h4>
            <p>{props.name}</p>
          </Typography>
          <Typography className={styles.item_gap3}>
            <h4>Description</h4>
            <p>{props.name}</p>
          </Typography>
          <Typography className={styles.item_gap2}>
            <h4>Owner</h4>
            <p>{props.name}</p>
          </Typography>
          <Typography className={styles.item_gap2}>
            <h4>Date</h4>
            <p>{props.name}</p>
          </Typography>
          <Typography className={styles.item_gap1}>
            {props.detailstate && (<h4 className={styles.detail_label}>Hide</h4>)}
            {!props.detailstate && (<h4 className={styles.detail_label}>Detail</h4>)}
          </Typography>
          
        </AccordionSummary>
        {!props.size && (<AccordionDetails className={styles.deails}>
          <img src="../image/trans_transaction.png" />
          <div  className={styles.detail_content}>
            <div className={styles.detail_content_first}>
              <Typography className={styles.item}>
                <div className={styles.title}>Value</div>
                <div className={styles.content}>{props.name}</div>
              </Typography>
              <Typography className={styles.item}>
              <div className={styles.title}>Tx Hash</div>
              <div className={styles.content}>{props.name}</div>
            </Typography>
            </div>
            <Typography className={styles.item}>
              <div className={styles.title}>From</div>
              <div className={styles.content}>{props.name}</div>
            </Typography>
            <Typography className={styles.item}>
              <div className={styles.title}>To</div>
              <div className={styles.content}>{props.name}</div>
            </Typography>
            <Typography className={styles.item}>
              <div className={styles.title}>Timestamp</div>
              <div className={styles.content}>{props.name}</div>
            </Typography>
          </div>
          <div className={styles.detail_report}>
            <Typography>
              <h2>Transaction Summary</h2>
              <div className={styles.item}>
                <div className={styles.title}>
                  <img src="../image/Arrow Right.svg" width="5px" />
                  <span className={styles.title}>Seller</span>
                </div>
                <div className={styles.content}>
                  {"98ELA + 0.0631464ELA"}
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>
                  <img src="../image/Arrow Right.svg" width="5px" />
                  <span className={styles.title}>Platform fee</span>
                </div>
                <div className={styles.content}>
                  {"2ELA + 0.0631464ELA"}
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>
                  <img src="../image/Arrow Right.svg" width="5px" />
                  <span className={styles.title}>Royalties</span>
                </div>
                <div className={styles.content}>
                  {"0ELA"}
                </div>
              </div>
              <hr />
              <div className={styles.title}>{"100.0062928ELA"}</div>
              <hr />
              <hr />
            </Typography>
            <Link to="/explorer/transaction/">
              <span>See more</span>
              <img src="../image/Arrow Right.svg" width="5px" />
            </Link>
          </div>
          
        </AccordionDetails>)}
        {props.size && (<AccordionDetails className={styles.deails}>
          <img src="../image/trans_creation.png" />
          <div  className={styles.detail_content}>
            <div className={styles.detail_content_first}>
              <Typography className={styles.item}>
                <div className={styles.title}>Creator</div>
                <div className={styles.content}>{props.name}</div>
              </Typography>
            </div>
            <Typography className={styles.item}>
              <div className={styles.title}>Royalties</div>
              <div className={styles.content}>{props.name}</div>
            </Typography>
            <Typography className={styles.item}>
              <div className={styles.title}>Gas Fee</div>
              <div className={styles.content}>{props.name}</div>
            </Typography>
            <Typography className={styles.item}>
              <div className={styles.title}>Timestamp</div>
              <div className={styles.content}>{props.name}</div>
            </Typography>
          </div>
        </AccordionDetails>)}
      </Accordion>
    </div>
  );
}
Transaction.propTypes = {
  detailstate: PropTypes.bool,
  props: PropTypes.object,
  thumbnail: PropTypes.string,
  name: PropTypes.string,
  timestamp: PropTypes.string,
  tokenIdHex: PropTypes.string,
  gasfee: PropTypes.string,
  value: PropTypes.number,
  size: PropTypes.number,
};
