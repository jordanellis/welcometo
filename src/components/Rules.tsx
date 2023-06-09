import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

export default function Rules() {
  return (
    <Box sx={{ p: "3rem", maxWidth: "60rem", mx: "auto" }}>
      <MuiLink component={Link} to={"/"}>
        {"< Back"}
      </MuiLink>
      <h1>Welcome To...</h1>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Base game</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2>Object of the Game</h2>
          <p>
            Architects gradually develop their three streets by building houses,
            identified by their numbers. Houses will be grouped into housing
            estates, but only fully-completed ones count at the end of the game.
          </p>
          <p>
            Parks and pools help to improve the neighborhood. Architects can
            raise the quality of their constructions in order to promote their
            estates&apos; value. All of this while trying to be the first to
            complete the City Plans!
          </p>
          <p>
            Finally, by increasing recruitment through temp agencies, architects
            can hasten the construction and get in the mayor&apos;s good graces.
          </p>

          <h2>Game Play</h2>
          <p>
            At the beginning of each turn, flip over the top card of each
            construction stack and place it to the right with its effect
            displayed. These stacks create three combinations, comprised of a
            House Number and an Effect. These combinations are used to perform
            actions.
          </p>
          <p>
            Players take turns simultaneously. Each player individually chooses
            one of the three combinations available to perform an action on
            their sheet. Multiple players can pick the same combination.
          </p>
          <p>
            Each player must write the number from the chosen combination in a
            house on one of the three streets on their sheet. Numbers must
            always be written in an empty house and must be written in ascending
            order from left to right.
          </p>
          <p>The same number can never appear twice in the same street.</p>
          <p>
            NOTE: When filling in houses, players may leave as many empty houses
            between two built houses, and then fill them in later. Numbers must
            still be in ascending order.
          </p>
          <p>
            Also, players may skip numbers when filling in houses, like placing
            a 10 directly after a 7.
          </p>
          <p>
            If a player cannot follow the placement rules, they do not fill in a
            house number and receive a building permit refusal. Cross off the
            top-most, lowest-numbered space.
          </p>
          <p>
            The player&apos;s chosen combination also allows them to perform an
            effect. Players may perform the effect only if they did not receive
            a building permit refusal. Note: performing an effect is optional.
          </p>
          <p>
            Once all players have built their houses and carried out effects, a
            new turn begins. If the construction stacks are ever empty,
            reshuffle them and deal out as before.
          </p>

          <h2>Effects</h2>
          <h3>Surveyor</h3>
          <p>
            Allows the player to build a fence between two houses on the same
            street. To build a fence, choose any available, white-dotted space
            and draw a line on it. Permanent fences are present on both sides of
            each street.
          </p>
          <p>
            Fences determine the boundaries of housing estates. A completed
            housing estate is a row of 1 to 6 neighboring houses, all numbered
            (no blank spaces between them) and built between two fences.
          </p>
          <p>
            Completed housing estates are necessary to fulfill City Plans and
            may be split further, as long as they have not previously fulfilled
            a City Plan.
          </p>
          <p>
            Example: The architect has written a 5 on the third house of the
            second street in order to start a 3-house estate. Then they built a
            fence between the first and the second house of the first street,
            therefore splitting a 3-House estate into 1-house and 2-house
            estates.
          </p>

          <h3>Real Estate Agent</h3>
          <p>
            Promotes and increases the value of completed housing estates. To
            use the Real Estate Agent, choose a Real Estate column and cross off
            the top-most, lowest- numbered space.
          </p>
          <p>
            At the end of the game, each completed estate (size 2, 3, 4, etc..).
            scores as many points as the smallest, unchecked number from its
            corresponding column.
          </p>
          <p>
            Example: After crossing off the top-most space in the 2-House estate
            column, each 2-house estate now scores 3 points at game end. The 3-
            and 4-house estates score points equal to their initial amount.
          </p>

          <h3>Landscaper</h3>
          <p>
            Allows the player to build a park. The player crosses off one of the
            trees at the end of the street. Parks must be crossed off on the
            same street that the house number is written. Parks are crossed off,
            left- to-right in ascending order.
          </p>

          <h3>Pool Manufacturer</h3>
          <p>
            Allows a player to score points when building houses that have a
            planned pool. If a player writes the house number associated with
            the Pool Manufacturer effect in a house with a planned pool, then
            the pool is built. Cross off the top-most, lowest-numbered space in
            their pools column.
          </p>
          <p>
            Note: A player can use a house number/effect combination without a
            Pool Manufacturer effect to write a number in a house.
          </p>
          <p>
            Oppositely, a player can write a number associated with the Pool
            Manufacturer effect in a house without a pool. However, in both
            cases, the pool is not built; therefore the player does not cross
            off a new pool in their pools column.
          </p>

          <h3>Temp Agency</h3>
          <p>
            Allows the player to add or subtract 1 or 2 to the house number they
            are building. The Temp Agency allows the player to write numbers
            from 0 to 17. For each use of the Temp Agency, cross off one box
            from the Temp Agency column. At the end of the game, the player who
            crossed off the most Temp
          </p>
          <p>
            Agency boxes scores 7 points. The next highest scores 4 points, and
            the third highest scores 1 point. In case of a tie, players score
            the same amount of points.
          </p>
          <p>
            Example: Using a number 8 card, build a house with the number 6, 7,
            8, 9, or 10. Then, cross off one box.
          </p>

          <h3>«bis»</h3>
          <p>
            Allows the player to duplicate a house number on any street. The new
            house must be directly adjacent, to the left or right of the house
            with the same number. Duplicate houses can never be separated by
            fences.
          </p>
          <p>
            When duplicating a number, write &quot;bis&quot; next to the number
            in the new house. A house can be duplicated multiple times, and the
            duplicated number does not have to be associated with the
            number/effect combination.
          </p>
          <p>
            Cross off the top-most, lowest-numbered space in the &quot;bis&quot;
            column. At the end of the game, subtract the smallest, unchecked
            number from the final score.
          </p>

          <h2>City Plans</h2>
          <p>
            A City Plan presents a goal set by the City to its architects, as in
            building a certain number of housing estates with mandated sizes.
          </p>
          <p>
            The first player(s) who meet the required conditions of a City Plan
            during the same turn immediately score the points indicated. Write
            the higher amount from the &quot;Project&quot; side of the City Plan
            card in the corresponding box (n°1, 2, or 3) in their Plans column.
          </p>
          <p>
            Turn over the City Plan to its &quot;Approved&quot; side. A player
            can only score each City Plan once.
          </p>
          <p>
            Other players who later achieve the same City Plan score the lower
            point amount.
          </p>

          <h2>Housing Estates Plans</h2>
          <p>
            To fulfill these City Plans, the player must complete all of the
            required housing estates.
          </p>
          <p>
            The estates do not have to be in the same street. There is no
            restriction to the location of a Plan&apos;s estates.
          </p>
          <p>
            Note: After an estate has fulfilled a City Plan, it cannot be
            further subdivided with a Surveyor&apos;s fence. Also, it cannot
            fulfill another City Plan. The player marks out the fence above each
            house to indicate it has already fulfilled a City Plan.
          </p>
          <p>
            The first player who completes a goal can choose to reshuffle the 81
            Construction cards and deal three new stacks of cards as in game
            setup.
          </p>

          <h2>End of the Game</h2>
          <p>The game ends immediately when:</p>
          <p>A player crosses off their third Building Permit Refusal or</p>
          <p>A player achieves all three City Plans or</p>
          <p>A player has built all of the houses on their streets.</p>
          <p>
            Add up the points for City Plans, parks on each street, pools,
            temps, and completed estates Subtract the points from the
            &quot;Bis&quot; column and the Building Permit Refusal column.
          </p>
          <p>The player with the most points wins.</p>
          <p>
            In case of a tie, the player with the most completed estates wins.
            In case of another tie, the player with the most 1-house estates
            wins, then 2-house, etc... In case of another tie, (seriously?)
            players play another game of Welcome To.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Advanced variants</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h2>Additional City Plans</h2>
            <p>
              These are additional goals that can be added to the basic version.
              The same rules apply to them.
            </p>
            <h2>Roundabout</h2>
            <p>
              Before or after building a house and activating an effect on their
              turn, a player can choose to create one of the two available
              roundabouts. Choose an empty house&apos;s box, draw a circle and a
              dot inside it where a house number would go, and then build estate
              fences to the left and the right of the roundabout.
            </p>
            <p>
              The roundabout divides the street in two. Therefore, house numbers
              may start over directly to the right of the roundabout. Players
              can use numbers 0-17 to the left of a roundabout, while also using
              numbers 0-17 on the other side.
            </p>
            <p>
              Cross off the top-most space on the roundabout column. The first
              costs 3 points and the second costs 5 points.
            </p>
            <p>
              At the end of the game, subtract the smallest, unchecked number
              from the final score.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Spring Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              <strong>
                While collecting Easter Eggs can be a lot of fun, it can also be
                tricky if they are well hidden
              </strong>
            </p>
            <p>
              You are trying to collect as many Easter Eggs as possible. You
              have to be clever to get them!
            </p>
            <p>
              In order to collect an egg, you must fill the house using the
              loops in specific numbers such as 0, 6, 8, 9, 10, and 16. If you
              fill the house with a number containing a 6 or 9, you can only
              collect one egg. If using a number with a 0 or an 8, you can
              collect up to 2 eggs.
            </p>
            <p>
              At the end of the game, if you collected 6/10/12/16 eggs, you
              score 5/10/20/35 points respectively.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Summer Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              <strong>Own the best ice cream truck in the neighborhood.</strong>
            </p>
            <p>
              The ice cream truck goes down each street only once, and therefore
              all missed ice cream orders are lost.
            </p>
            <p>
              When you write a number in a house, draw a line from the ice cream
              truck to that house. If the ice cream truck ends its trip in front
              of a house with an ice cream cone, circle it and then, cross off
              all other ice cream cones on the truck&apos;s trip that were
              passed.
            </p>
            <p>
              As soon as you circle or cross off the last ice cream cone of one
              street, you earn a bonus of 1 point for each ice cream cone
              circled in the street. All other players must cross off this
              bonus, but can keep selling ice cream cones on that street.
            </p>
            <p>
              When you start numbering the 3rd street, pick the ice cream truck
              you want from either side and cross off the other. Only one bonus
              applies for this street.
            </p>
            <p>
              You earn 1 point for <strong>each scoop</strong> of ice cream
              circled during the game.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Halloween Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              <strong>
                It&apos;s Halloween and time to go Trick or Treating in the
                Neighborhood!
              </strong>
            </p>
            <p>
              Some houses give out great candy, while other houses are just in
              it to scare you. You&apos;re out trick or treating, trying to find
              the best scares and get the most candy.
            </p>
            <p>
              Every time you fill a number in a house displaying candy or a
              ghost, you choose one to circle.
            </p>
            <p>
              When you reach 4/6/9 Candy, you may announce it and receive
              5/10/15 points respectively. If the points have already been taken
              by another player, you can receive points of a lower level still
              available. All other players must cross off the amount received.
              If multiple players finish simultaneously, they score the same
              points. But you can only score once, so you can press your luck
              and go for 9. However, once someone else claims it, it&apos;s no
              longer available!
            </p>
            <p>
              When you reach 4/6/9 Ghosts, you may choose the corresponding
              trick. If the trick has already been taken by another player, you
              can choose a trick of a lower level still available. Announce your
              trick and check off the ghost box. All other players cross it off
              as well. The trick happens in addition to any action taken this
              turn. Only one trick per player, so you can press your luck and go
              for a higher trick, and when someone claims one, it&apos;s gone
              for everyone!
            </p>
            <p>The following are what ghosts can gain you:</p>
            <ul>
              <li>4 ghosts: 1 pool or 1 park.</li>
              <li>6 ghosts: 2 pools or 1 bis without taking a penalty.</li>
              <li>9 ghosts: 3 parks or 2 bis without taking a penalty.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Winter Rules</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              <strong>It&apos;s Christmas Time!</strong>
            </p>
            <p>
              People love looking at all of the pretty lights, but no one likes
              that one house on the block that doesn&apos;t participate.
            </p>
            <p>
              You are trying to make the longest stretch of consecutive numbers
              on each street. At the end of the game, draw a string of Christmas
              lights connecting all consecutive numbers on each of your streets.
              Score points for your longest string of Christmas lights on each
              street! You&apos;ll score as many points as houses that are
              connected by this string.
            </p>
            <p>Bis counts as consecutive numbers!</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
