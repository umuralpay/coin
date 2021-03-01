import {useLocation} from "react-router";
import {useState, useEffect} from "react";
import api from "../helpers/api";
import Progress from "../components/Progress";
import {Container} from "@material-ui/core";
import CardView from "../components/CardView";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    loader: {
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});
function Detail() {
    const classes = useStyles();
    const history = useHistory();
    const [data, setData] = useState(null);
    const query = new URLSearchParams(useLocation().search);
    const hash = query.get('hash');
    useEffect(async () => {
        try {
            const result = await api.getDetail(hash);
            setData(result.data);
        }catch(e) {
            console.log(e);
        }
    }, []);

    const goToTransaction = (hash) => {
        history.push({
            pathname: "/transaction",
            search: `?tx=${hash}`
        });
    }
    if(data !== null) {
        return (
            <Container maxWidth="md">
                <CardView hash={hash} data={data} onClick={(row) => goToTransaction(row)} />
            </Container>
        );
    }else {
        return (<Container className={classes.loader} maxWidth="sm">
            <Progress />
        </Container>);
    }
}

export default Detail;
