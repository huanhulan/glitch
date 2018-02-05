# glitch

> A glitch is defined as a visible output that isn’t consistent with the relationships defined by the FRP code. To demonstrate a glitch, you need simultaneous events.

> Suppose you have two simultaneous events—ones and hundreds. You’ll feed the numbers 1 and 2 into ones. hundreds is ones multiplied by 100, and sum is the sum of ones and hundreds. In a perfect, glitch-free world picture below shows what you would like to see visible in sum.

> ![](https://github.com/huanhulan/glitch/blob/master/glitch.png?raw=true)

> If you code this in RxJS and then load it in the browser, you get these alerts:
>>  * 101
>>  * 102
>>  * 202
>
> -- <cite> Stephen Blackheath in *Functional Reactive Programming*</cite>
