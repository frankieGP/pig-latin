1.
The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
  Example Input: 3
  Example Output: 3

2.
The program adds "ay" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iay

3.
The program adds "ay" to words beginning with a vowel.  

4.
The program moves all of the first consecutive consonants to the end for words beginning with one or more consonants.
Example Input: headphone, slow
Example Output: eadphoneh, owsl

5.
The program adds "ay" to the end of words that have had all of the first consecutive consonants moved to the end.
Example Input: headphone, slow
Example Output: eadphoneh-ay, owsl-ay

6.
The program moves the vowel "u" when following the letter "q" when "q" is one of the first consecutive consonants.
Example Input: queen
Example Output: eenqu

7.
The program adds "ay" to the end of words that have had all of the first consecutive consonants including "qu" moved to the end.
Example Input: queen
Example Output: eenqu-ay

8.
The program moves the vowel "y" to the end of the word for words that begin with the vowel "y".
Example Input: yellow
Example Output: ellowy

9.
The program adds "ay" to the end of words that have had all of the first consecutive consonants including "qu" and "y" moved to the end.
Example Input: yellow
Example Output: ellowy-ay
