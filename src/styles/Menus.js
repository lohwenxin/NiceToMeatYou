import { makeStyles } from "@material-ui/core/styles";

export const useMenusEntry = makeStyles(() => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    height: '100%',
    margin: 20,
  },
  link: {
    textDecoration: 'none',
  },
}));
