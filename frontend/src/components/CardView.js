import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { DataGrid } from '@material-ui/data-grid';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from "moment";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        height: 750
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    subTitle: {
        marginTop: 50
    },
    pos: {
        marginBottom: 12,
    },
    content: {
        height: 450
    },
    table: {
        cursor: "pointer"
    }
});
const columns = [
    { field: 'hash', headerName: 'Hash', flex: 1},
    { field: 'time', headerName: 'Time', valueFormatter: ({ value }) => moment.unix(value).format('DD-MM-YYYY HH:mm'), flex: 1 },
    { field: 'size', headerName: 'Size', flex: 1},
    { field: 'fee', headerName: 'Fee', flex: 1}
];
export default function CardView(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Typography variant="h6" component="h3">
                    Hash: {props.hash}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Size: {props.data.size}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Block Index: {props.data.block_index}
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                    Previous Block: {props.data.prev_block}
                </Typography>
                <Typography className={classes.subTitle} variant="h6" component="h4">
                    Latest Transactions
                </Typography>
                <DataGrid className={classes.table} rows={props.data.tx} onRowClick={(param) => props.onClick(param.row.hash)} columns={columns} pageSize={5} />
            </CardContent>
        </Card>
    );
}
