import React from 'react';
import { StyleSheet,Header, Text, View } from 'react-native';

export default class ReadStory extends React.Component {
    render(){
        return(
            <View style={{flex:1, justifyContent:'center',alignItems: 'center'}}>
            <Text style={styles.header}>Read a Story</Text>
            <Text style= {styles.text}> A fair princess indeed, Snow White was named for the colour of her skin, which was white as snow, hair as black as ebony, and lips as red as a rose. Her father, having lost his wife, married again, and this new queen was as beautiful as she was proud. She would often consult her mirror and ask “Mirror Mirror, on the wall; Who is the fairest of them all?”

As Snow White began to grow, she became more and more beautiful, and the queen’s magic mirror soon began to say so. Enraged and filled with jealousy, the queen sent a huntsman to kill Snow White and bring her her heart.

The Huntsman, pitying the innocent Snow White, told her to run away and never come back. He, instead, delivered to the queen the heart of a pig. When the queen consulted her mirror and found that she had been tricked, she determined to kill Snow White herself and so began to prepare her poisoned apple.

Snow White, in the meantime, found a place with seven dwarfs, whom she lived with and cared for. One day, when they were at work in the mines, the queen went to see Snow White, disguised as an old peasant woman selling apples. Snow White was convinced to take a bite out of the apple and instantly fell down, as if dead. When the dwarfs found her, they were distraught and laid her in a glass coffin.

One day, as a prince was passing by, he noticed the dwarfs mourning over a beautiful sleeping girl (for she remained as beautiful as she ever was) and was mesmerised by her beauty. He kissed her hand to bid her farewell, and at that moment, the apple dislodged itself, and Snow White opened her eyes. The prince was so happy that he asked for her hand in marriage and she accepted. There was a grand celebration, and they lived and reigned happily together. The evil queen became sick from her envy and eventually died.

We must always remember, from the fate of the queen, that if you lust after physical beauty, you will, indeed lose your peace, and be quite unhappy when you are not considered the most beautiful. On the contrary, kindness and gentleness win the hearts of many.

</Text>
</View>
        )
    }
}

const styles= StyleSheet.create({
    text:{
        flex: 1,
        fontWeight: 'bold',
        fontSize: 10,
        alignItems:'center',
        justifyContent: 'center',
    },
    header:{
        backgroundColor: 'coral',
        fontSize: 30,
    }
})