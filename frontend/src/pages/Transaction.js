import {useLocation} from "react-router";
import {useState, useEffect} from "react";
import api from "../helpers/api";
import { makeStyles } from '@material-ui/core/styles';
import Progress from "../components/Progress";
import {Container} from "@material-ui/core";
import Chip from '@material-ui/core/Chip';
import moment from "moment";

const useStyles = makeStyles({
    container: {
        width: 300,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    chip: {
        marginTop: 10
    },
    loader: {
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});
function Detail() {
    const classes = useStyles();
    const [data, setData] = useState(null);
    const query = new URLSearchParams(useLocation().search);
    const tx = query.get('tx');
    useEffect(async () => {
        try {
            const result = await api.getTransaction(tx);
            setData(result.data);
        }catch(e) {
            console.log(e);
        }
    }, []);
    if(data !== null) {
        return (
            <Container maxWidth="sm">
                <h3>Transaction: {data.hash}</h3>
                <div className={classes.container}>Block height: <Chip className={classes.chip} label={data.block_height} /></div>
                <div className={classes.container}>Block index: <Chip className={classes.chip} label={data.block_index} /></div>
                <div className={classes.container}>Fee: <Chip className={classes.chip} label={data.fee} /></div>
                <div className={classes.container}>DateTime: <Chip className={classes.chip} label={moment.unix(data.time).format('DD-MM-YYYY HH:mm')} /></div>
                <div className={classes.container}>Size: <Chip className={classes.chip} label={data.size} /></div>
            </Container>
        );
    }else {
        return (<Container className={classes.loader} maxWidth="sm">
            <Progress />
        </Container>);
    }
}

export default Detail;
