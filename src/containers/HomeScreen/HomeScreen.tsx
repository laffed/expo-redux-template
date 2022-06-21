import { VFC } from 'react';
import { View, Button, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@hooks/index';
import { barAsyncActions } from '@actions';
import { TabStackScreenProp, TabRoutes } from '@navigation/index';
import { selectBuzz, selectBarTestUser } from '@app/core/selectors';


export const HomeScreen: VFC<TabStackScreenProp<TabRoutes.HOME>> = () => {
  const dispatch = useAppDispatch();
  const bar = useSelector(selectBuzz);
  const user = useSelector(selectBarTestUser);
  const onPress = () => {
    void dispatch(barAsyncActions.fetchGetBarTestUser(2));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <Text>
        {bar}
      </Text>
      {!!user && (
        <Text>
          {user.email}
        </Text>
      )}
      <Button
        title='Press'
        onPress={ onPress }
      />
    </View>
  );
};
