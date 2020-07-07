import { makeStyles } from '@material-ui/core/styles';

const SearchStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
export default makeStyles(SearchStyles);
