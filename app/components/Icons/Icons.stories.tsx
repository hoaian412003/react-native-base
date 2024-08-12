import type { Meta, StoryObj } from '@storybook/react';
import { Center, Row, Text } from 'native-base';
import Icons from '.';
import _ from 'lodash';

const meta: Meta = {
  title: "Icons"
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Center padding={4} style={{ gap: 10 }} flex={1}>
    {_.values(Icons).map((Icon: any, key) => (
      <Row style={{ gap: 1 }}>
        <Text>{Icon.name}</Text>
        <Icon key={key} size={20} />
      </Row>
    ))}
  </Center>
}
