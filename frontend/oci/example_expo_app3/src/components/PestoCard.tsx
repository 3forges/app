import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

export interface LeftContentProps {
    icon: string;//icon="folder";
    size: number;
}

const leftContentConfig: LeftContentProps = {
    icon: 'folder',
    size: 5
}
const LeftContent = (props: LeftContentProps)  => <Avatar.Icon {...props} icon={props.icon} />
const LeftContent2 = (props: {size: number})  => <Avatar.Icon size={props.size} icon='folder' />


export interface PestoCardProps {
    title: string;
    subtitle?: string;// optional subtitle
    content: string; // main text of card
    cover_uri: string; // URI of image for cover image 'https://picsum.photos/700'
}
const PestoCard = (props: PestoCardProps) => (
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent2} />
    <Card.Content>
      <Text variant="titleLarge">{props.title}</Text>
      <Text variant="bodyMedium">{props.content}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: `${props.cover_uri}` }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default PestoCard;