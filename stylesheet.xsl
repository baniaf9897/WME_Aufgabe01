<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" >
    <xsl:template match="/">
    <html> 
        <body>
            <h2>World Data Overview</h2>
                <table border="1">
                    <tr>
                        <th>ID</th>
                        <th>Country</th> 
                        <th>birth rate/1000</th>
                        <th>cellphone/100</th>
                        <th>children/women</th>
                        <th>electrical usage</th>
                        <th>internet usage</th>
                    </tr>
                    <xsl:for-each select="world_data/*">
                        <tr>
                            <td><xsl:value-of select="id"/></td>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="birth_rate_per_1000"/></td>
                            <td><xsl:value-of select="cell_phones_per_100"/></td>
                            <td><xsl:value-of select="children_per_woman"/></td>
                            <td><xsl:value-of select="electricity_consumption_per_capita"/></td>
                            <td><xsl:value-of select="gdp_per_capita"/></td>
                        </tr>
                    </xsl:for-each>
                </table> 
            </body> 
        </html>
    </xsl:template>
</xsl:stylesheet>