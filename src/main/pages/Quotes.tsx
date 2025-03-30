import Grid from "@material-ui/core/Grid";
import React from "react";
import MainAppBar from "../components/MainAppBar";
import MainToolbar from "../components/MainToolbar";
import { Card, CardContent, Typography } from "@material-ui/core";

type QuoteProps = {
  quote: string;
  author: string;
};

const QuoteCard = ({ quote, author }: QuoteProps) => {
  return (
    <Card elevation={6}>
      <CardContent>
        <Typography
          align="left"
          component="div"
          variant="h4"
        >
          {quote}
        </Typography>
        <Typography>- {author}</Typography>
      </CardContent>
    </Card>
  );
};

const quotes: Array<QuoteProps> = [
  {
    quote: "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.",
    author: "Albert Einstein",
  },
  {
    quote: "The moment when you feel like giving up is right before your breakthrough",
    author: "Victoria Arlen",
  },
  {
    quote: "Although the world is full of suffering, it is also full of the overcoming of it.",
    author: "Helen Keller",
  },
  {
    quote: "If you want to see the true measure of a man, watch how he treats his inferiors, not his equals.",
    author: "J.K. Rowling",
  },
  {
    quote: "He who is not contented with what he has would not be contented with what he would like to have.",
    author: "Socrates"
  },
  {
    quote: "The difference between successful people and very successful people is that very successful people say 'no' to almost everything.",
    author: "Warren Buffet",
  },
  {
    quote: "Don't stop when you are tired.  Stop when you are done.",
    author: "Reggie Miller",
  },
  {
    quote: "Gratitude turns what we have into enough.",
    author: "Aesop",
  },
  {
    quote: "The only way to become excellent is to be endlessly fascinated by doing the same thing over and over. You have to fall in love with boredom.",
    author: "James Clear - Atomic Habits",
  },
  {
    quote: "We dance round in a ring and suppose, but the Secret sits in the middle and knows.",
    author: "Robert Frost",
  },
  {
    quote: "The moment when you feel like giving up is right before your breakthrough.",
    author: "Victoria Arlen",
  },
];

const Quotes = () => {
  return (
    <React.Fragment>
      <MainAppBar>
        <MainToolbar title="Favorite Quotes">
        </MainToolbar>
      </MainAppBar>
      <Grid container direction="column" spacing={2}>
        <Grid item>
            <Grid container spacing={2}>
                {quotes.map((quoteObj) => (
                    <Grid item xs={12} md={6} lg={4}>
                      <QuoteCard
                          quote={quoteObj.quote}
                          author={quoteObj.author}
                      />
                    </Grid>
                ))}
              </Grid>
            </Grid>
        </Grid>
        <Grid item mt={5}>
        <div>
          If (by RUDYARD KIPLING)<br/><br/>

If you can keep your head when all about you<br/>
{'\u00a0'.repeat(3)}Are losing theirs and blaming it on you,<br/> 
If you can trust yourself when all men doubt you,<br/>
{'\u00a0'.repeat(3)}But make allowance for their doubting too;<br/>
If you can wait and not be tired by waiting,<br/>
{'\u00a0'.repeat(3)}Or being lied about, don't deal in lies,<br/>
Or being hated, don't give way to hating,<br/>
{'\u00a0'.repeat(3)}And yet don't look too good, nor talk too wise:<br/><br/>

If you can dream—and not make dreams your master;<br/>
{'\u00a0'.repeat(3)}If you can think—and not make thoughts your aim;<br/>
If you can meet with Triumph and Disaster<br/>
{'\u00a0'.repeat(3)}And treat those two impostors just the same;<br/>
If you can bear to hear the truth you've spoken<br/>
{'\u00a0'.repeat(3)}Twisted by knaves to make a trap for fools,<br/>
Or watch the things you gave your life to, broken,<br/>
{'\u00a0'.repeat(3)}And stoop and build 'em up with worn-out tools:<br/><br/>

If you can make one heap of all your winnings<br/>
{'\u00a0'.repeat(3)}And risk it on one turn of pitch-and-toss,<br/>
And lose, and start again at your beginnings<br/>
{'\u00a0'.repeat(3)}And never breathe a word about your loss;<br/>
If you can force your heart and nerve and sinew<br/>
{'\u00a0'.repeat(3)}To serve your turn long after they are gone,<br/>
And so hold on when there is nothing in you<br/>
{'\u00a0'.repeat(3)}Except the Will which says to them: 'Hold on!'<br/><br/>

If you can talk with crowds and keep your virtue,<br/>
{'\u00a0'.repeat(3)}Or walk with Kings—nor lose the common touch,<br/>
If neither foes nor loving friends can hurt you,<br/>
{'\u00a0'.repeat(3)}If all men count with you, but none too much;<br/>
If you can fill the unforgiving minute<br/>
{'\u00a0'.repeat(3)}With sixty seconds' worth of distance run,<br/> 
Yours is the Earth and everything that's in it,<br/>
{'\u00a0'.repeat(3)}And—which is more—you'll be a Man, my son!<br/>
          </div>
        </Grid>
    </React.Fragment>
  );
};

export default Quotes;
