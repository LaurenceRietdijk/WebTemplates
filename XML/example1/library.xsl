<xsl:stylesheet version = "1.0" 
xmlns:xsl = "http://www.w3.org/1999/XSL/Transform"> 
<xsl:template match = "/library">
	<html>
		<body>
			<h2>Library Borrowing System</h2>
			<table>
				<tr>
					<th>by</th>
					<th>bookid</th>
					<th>date</th>
					<th>name</th>
					<th>id</th>
				</tr>
				
			<xsl:for-each select = "issued">
					<tr>
				    <td><xsl:value-of select = "issued[@by]"/></td>
				   </tr>
					<tr>
					    <td><xsl:value-of select = "@by"/></td>
						<td><xsl:value-of select = "bookid"/></td>
						<td><xsl:value-of select = "date"/></td>
							<xsl:for-each select = "borrower">
								<tr>
									<td></td><td></td><td></td>
									<td><xsl:value-of select = "name"/></td>
						   			<td><xsl:value-of select = "id"/></td>
						
								</tr>
						</xsl:for-each>
					</tr>
				
		  </xsl:for-each>
				
				
			</table>
		</body>
	</html>
</xsl:template>
</xsl:stylesheet>