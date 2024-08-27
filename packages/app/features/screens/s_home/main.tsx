import { TextLink } from 'solito/link'
import { H1, Text } from 'app/design/typography'
import { View } from 'app/design/view'
export function MainScreen(){
    return (
        <View className="flex-1 items-center justify-center">
            <H1>Contacts</H1>
            <Text className='mb-4 text-center font-bold'>Contacts</Text>
            <TextLink href="/">👈 Go Home</TextLink>
        </View>
      )

}