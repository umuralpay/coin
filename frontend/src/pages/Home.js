import DataGrid from "../components/DataGrid";
import { useHistory } from "react-router-dom";
import {useState, useEffect} from "react";
import api from '../helpers/api';
import Progress from "../components/Progress";
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    loader: {
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});
function Home() {
    const classes = useStyles();
    const history = useHistory();
    const [data, setData] = useState(null);

    useEffect(async () => {
        try {
            const result = await api.getList();
            setData(result.data);
        }catch(e) {
            console.log(e);
        }
    }, []);

    const goToDetail = (hash) => {
        history.push({
            pathname: "/detail",
            search: `?hash=${hash}`
        });
    }
    if(data !== null) {
        return (
            <div className="Home">
                <DataGrid rows={data} onClick={(hash) => {goToDetail(hash)}} />
            </div>
        );
    }else {
        return (<Container className={classes.loader} maxWidth="sm">
            <Progress />
        </Container>)
    }
}

export default Home;
