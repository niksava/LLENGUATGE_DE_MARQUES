<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/notes">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <title>Notes de la URV</title>
        <style>
          body { background-color: #00BFBF; }
          h2 { color: white; }
          td { color: white; }
          tr.suspens td { background-color: red; }
        </style>
      </head>
      <body>
        <xsl:for-each select="assignatura">
          <h2><xsl:value-of select="@nom"/></h2>
          <table>
            <xsl:for-each select="alumne">
              <xsl:choose>
                <xsl:when test="nota &lt; 5">
                  <tr class="suspens">
                    <td><xsl:value-of select="nom"/></td>
                    <td><b><xsl:value-of select="nota"/></b></td>
                  </tr>
                </xsl:when>
                <xsl:otherwise>
                  <tr>
                    <td><xsl:value-of select="nom"/></td>
                    <td><b><xsl:value-of select="nota"/></b></td>
                  </tr>
                </xsl:otherwise>
              </xsl:choose>
            </xsl:for-each>
          </table>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
