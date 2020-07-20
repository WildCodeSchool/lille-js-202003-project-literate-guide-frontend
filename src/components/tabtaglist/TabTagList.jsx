import React, { useContext } from 'react';
import * as _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import TabTag from '../tabtag/TabTag';

import { ApiContext } from '../../contexts/ApiContext';

const TagListStyles = makeStyles(() => ({
  '@global': {
    '*::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));

const TabTagList = () => {
  const classes = TagListStyles();
  const { tags } = useContext(ApiContext);
  const selectTag = [...tags];

  const uniqueTagByID = _.uniqBy(tags, 'tag_id');

  return (
    <div>
      {selectTag && (
        <div>
          {uniqueTagByID.map((tag) => (
            <TabTag key={tag.tag_id} selectTag={tag} category={selectTag} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TabTagList;
