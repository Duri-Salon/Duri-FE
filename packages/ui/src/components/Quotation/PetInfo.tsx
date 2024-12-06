import { Flex, HeightFitFlex, Image, Text, theme } from '@duri-fe/ui';
import { PetInfoProps } from '@duri-fe/ui/assets/types/quotation';


export const PetInfo = ({image, name, age, breed, weight, gender }:Partial<PetInfoProps>) => {
    return <HeightFitFlex gap={18} margin="19px 0 0 0">
          <Image
            borderRadius={40}
            width={133}
            height={133}
            src={image}/>
          <Flex direction="column" gap={15} align="flex-start">
            <Text typo="Body2">{name}</Text>
            <Text typo="Caption2" colorCode={theme.palette.Gray400}>
              {breed}, {gender === '여아' ? '암컷' : '수컷'}, {age}세, {weight}kg
            </Text>
          </Flex>
        </HeightFitFlex>
}