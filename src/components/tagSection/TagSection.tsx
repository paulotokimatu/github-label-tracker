import React, { useState } from 'react';
import {
  Button,
  Input,
  Segment,
} from 'semantic-ui-react';

const TagSection: React.FC<any> = ({ tags, onClick }) => {
  const [tagName, setTagName] = useState<any>('');
  const tagsArray: string[] = [];

  tags.forEach((tag: string) => {
    tagsArray.push(tag);
  });

  const onAddTag = () => {
    onClick(tagName);
    setTagName('');
  }

  return (
    <Segment>
      <Input value={tagName} placeholder='Label' onChange={(e) => setTagName(e.target.value)} />
      <Button onClick={onAddTag}>Add</Button>
      {
        tagsArray.map((tag: string) => <div key={tag}>{tag}</div>)
      }
    </Segment>
  );
}

export default TagSection;
