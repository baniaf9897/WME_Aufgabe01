<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
    <xsl:template match="/">
    <html>
      <head>
          <link rel="stylesheet" href="../css/style.css"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>

          <title>WME Aufgabe 1</title>

          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>

      </head>
        <body>
          <main>
            <section>
              <header>
                <h1>World Data Overview</h1>
              </header>
              Show/Hide:
              <a onclick="ausblendenBirth()" href="#">birth rate/1000 </a>
               |
              <a onclick="ausblendenPhone()" href="#">cellphones/100 </a>
               |
              <a onclick="ausblendenChild()" href="#">children/women </a>
               |
              <a onclick="ausblendenElec()" href="#">electric usage </a>
               |
              <a onclick="ausblendenInternet()" href="#">internet usage </a>
                  <table border="1">
                      <tr>
                        <th class="id" id="id">ID</th>
                        <th class="country" id="countryid">Country <a onclick="sortUp(1)" href="#"><i class="fas fa-chevron-up"></i></a><a onclick="sortDown(1)" href="#"><i class="fas fa-chevron-down"></i></a></th>
                        <th class="birth" id="birthid">birth rate /1000</th>
                        <th class="phones" id="phonesid">cellphones /100</th>
                        <th class="childs" id="childsid">children / women</th>
                        <th class="electric" id="elecid">electric usage</th>
                        <th class="internet" id="internetid">internet usage</th>
                      </tr>
                      <xsl:for-each select="world_data/*">
                          <tr>
                              <td class="id" ><xsl:value-of select="id"/></td>
                              <td class="country" ><xsl:value-of select="name"/></td>
                              <td class="birth" ><xsl:value-of select="birth_rate_per_1000"/></td>
                              <td class="phones" ><xsl:value-of select="cell_phones_per_100"/></td>
                              <td class="childs" ><xsl:value-of select="children_per_woman"/></td>
                              <td class="electric" ><xsl:value-of select="electricity_consumption_per_capita"/></td>
                              <td class="internet" ><xsl:value-of select="gdp_per_capita"/></td>
                          </tr>
                      </xsl:for-each>
                  </table>
                </section>
              </main>
            </body>
            <script src="../js/script.js"></script>
        </html>
    </xsl:template>
</xsl:stylesheet>
