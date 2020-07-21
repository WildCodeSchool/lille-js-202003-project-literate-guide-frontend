import React, { useContext } from 'react';
import * as _ from 'lodash';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TabTag from '../tabtag/TabTag';

import { ApiContext } from '../../contexts/ApiContext';

const TagListStyles = makeStyles(() => ({
  tagContainer: {
    background: 'linear-gradient(45deg, #F15348 30%, #DA7B2F 90%)',
    color: 'white',
    height: '100vh',
    width: '270px',
    textAlign: 'center',
    paddingTop: '20px',
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '1.3rem',
  },
  categoryTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    padding: '10px 0',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  subTag: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hr: {
    width: '70%',
    marginTop: '20px',
    color: 'white',
  },
}));

const TabTagList = () => {
  const classes = TagListStyles();
  const { tags } = useContext(ApiContext);
  const selectTag = [...tags];

  const uniqueCategory = _.uniqBy(selectTag, 'category');

  return (
    <div className={classes.tagContainer}>
      <div>
        <Typography className={classes.title}>
          Choisissez vos centres d&apos;intérêts
        </Typography>
        <hr className={classes.hr} />
      </div>
      {selectTag && (
        <div>
          {uniqueCategory.map((cat) => (
            <>
              <Typography className={classes.categoryTitle}>
                {cat.category}
              </Typography>
              <div className={classes.subTag}>
                {selectTag
                  .filter((tag) => {
                    return cat.category === tag.category;
                  })
                  .map((tag) => (
                    <TabTag key={tag.id} selectTag={tag} />
                  ))}
              </div>
              <hr className={classes.hr} />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default TabTagList;
