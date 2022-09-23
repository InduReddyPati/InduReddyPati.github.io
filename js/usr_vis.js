// var margin = {
//     top: 30,
//     bottom: 30,
//     left: 30,
//     right:30
// }, width = parseInt(d3.select('.viz').style('width'))
//     , mapRatio = 0.5
//     , height = width * mapRatio
//     , active = d3.select(null);



function update(selectedVar, file_path) {

    var counts = [],
            states = [],
            margin = { top: 0, right: 0, bottom: 100, left: 60 },
            width = parseInt(d3.select('.viz').style('width')) 
            , mapRatio = 0.5
            // , height = width * mapRatio
            , active = d3.select(null),
            height = 800 - margin.top - margin.bottom;
            // width = 1200 - margin.left - margin.right;
      
        var tempColor=null,
            yScale=null,
            yAxisValues=null,
            yAxisTicks=null,
            yGuide=null,
            xScale=null,
            xAxisValues=null,
            xAxisTicks=null,
            xGuide=null,
            colors=null,
            tooltip=null,
            myChart=null;
    
    d3.json(file_path).then(function(d) {
      
        for (var i = 0; i<d.length; i++) {
            counts.push(d[i][selectedVar]);
            states.push( d[i].name );
        }
      
        yScale = d3.scaleLinear()
          .domain([0, d3.max(counts)])
          .range([0,height]);
      
        yAxisValues = d3.scaleLinear()
          .domain([0, d3.max(counts)])
          .range([height,0]);
      
        yAxisTicks = d3.axisLeft(yAxisValues)
      
        xScale = d3.scaleBand()
          .domain(counts)
          .paddingInner(.2)
          .paddingOuter(.2)
          .range([0, width])
      
        xAxisValues = d3.scaleBand()
          .domain(states)
          .range([0, width]);
      
        xAxisTicks = d3.axisBottom(xAxisValues)
        //   .ticks(d3.timeDay.every(1))
      

        if (selectedVar === "females"){
            colors = d3.scaleLinear()
                    .domain([0, d3.max(counts)/2, d3.max(counts)])
                    .range(['#fcae91', '#fb6a4a', '#cb181d'])
        } else {
            colors = d3.scaleLinear()
                    .domain([0, d3.max(counts)/2, d3.max(counts)])
                    .range(['#bdd7e7', '#6baed6', '#2171b5'])
        }
          
      
        tooltip = d3.select('body')
          .append('div')
          .style('position', 'absolute')
          .style('padding', '0 10px')
          .style('background', 'white')
          .style('opacity', 0);
      
        myChart = d3.select('#usr_dataviz').append('svg')
          .attr("id", "usr_vis_svg")
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform',
            'translate(' + margin.left + ',' + margin.right + ')')
          .selectAll('rect').data(counts)
          .enter().append('rect')
            .style('fill', colors)
            .attr('width', 40)
            // function(d) {
            //   return xScale.bandwidth();
            // })
            .attr('height', 0)
            .attr('x', function(d) {
              return xScale(d);
            })
            .attr('y', height)
            
            .on('mouseover', function(d) {
              tooltip.transition().duration(200)
                .style('opacity', 1)
              tooltip.html(
                '<div style="font-weight: bold">'
                + "<span class=\"tooltip_value\">Total Deaths: "
                + d
                + ""
                + "</span>"
                + "</div>"
                // '<div style="font-size: 2rem; font-weight: bold">' +
                //   d + '</div>'
              )
                .style('left', (d3.event.pageX -35) + 'px')
                .style('top', (d3.event.pageY -30) + 'px')
              tempColor = this.style.fill;
              d3.select(this)
                .style('fill', '#F6FF33')
            })
      
            .on('mouseout', function(d) {
              tooltip.html('')
              d3.select(this)
                .style('fill', tempColor)
            });
      
        yGuide = d3.select('#usr_dataviz svg').append('g')
                  .attr('transform', 'translate(60,0)')
                  .call(yAxisTicks)
                  
      
        xGuide = d3.select('#usr_dataviz svg').append('g')
                  .attr("class", "x axis")
                  .attr('transform', 'translate(60,'+ height + ')')
                  .call(xAxisTicks)
                  .selectAll("text")
                    .attr("y", 0)
                    .attr("x", 20)
                    // .attr("dx", "-.16em")
                    // .attr("dy", ".35em")
                    .attr("transform", "rotate(90)")
                    .style("text-anchor", "start");
      
        myChart.transition()
          .attr('height', function(d) {
            return yScale(d);
          })
          .attr('y', function(d) {
            return height - yScale(d);
          })
          .delay(function(d, i) {
            return i * 20;
          })
          .duration(1000)
          .ease(d3.easeBounceOut)
      
      });
}

function update_males(){
    d3.select("#usr_vis_svg").remove();
    d3.select("#h1_top_20").remove();
    d3.select('#top_20').html('<h1 '
            + 'id = "h1_top_20" '
            + 'class = "font_9"'
            + "><span>Top 20 Male Death States</span></h1>"
    )
    update('males', 'data/state_counts_bar_males.json')
}

function update_females(){
    d3.select("#usr_vis_svg").remove();
    d3.select("#h1_top_20").remove();
    d3.select('#top_20').html('<h1 '
        + 'id = "h1_top_20" '
        + 'class = "font_9"'
        + "><span>Top 20 Female Death States</span></h1>"
)
    update('females', 'data/state_counts_bar_females.json')
}

// Initialize plot
update('males', 'data/state_counts_bar_males.json');