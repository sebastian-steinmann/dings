import cgi
import rarfile
import os
import cgitb; cgitb.enable()


class Streamer:
	path = ''
	filename = ''
	filehandle = null
	archive_handle = null
	seek_start = 0
	seek_end = -1
	content_type = "application/octet-stream"

	def __init__(self, path, seek_start, seek_end):
		self.path = path
		self.filename = self.getFilename(path)
		self.rar_filename = self.getRarFile(self.filename)

		
		self.archive_handle = rarfile.RarFile(self.rar_filename) # Add some paths
		self.filehandle = self.archive_handle.open(self.filename)

		self.seek_start = seek_start
		self.seek_end = normaliseEndSeek(seek_start, seek_end)

		self.content_length = self.seek_end - self.seek_start + 1

	def normaliseEndSeek(self, seek_start, seek_end):
		if (seek_end < seek_start or seek_end > filehandle.file_size):
			return self.filehandle.file_size - 1;
		else:
			return seek_end
}

	def getFilename(self, path):
		return os.path.basename(path)


	def getRarFile(self, filename):
		base = os.path.splitext(filename)

		return "%s.rar" % base

	def printHeaders(self):
		print "Content-Type: %s" % content_type
		print "\"Content-Disposition: inline; filename=\"%s\"" % self.filename
		print "Content-Transfer-Encoding: binary"

		if (self.seek_start > 0):
			print 'HTTP/1.0 206 Partial Content'
			print 'Status: 206 Partial Content'
			print 'Accept-Ranges: bytes'
			print "Content-Range: bytes %s-%s/%s" % (self.seek_start, self.seek_end, self.filehandle.file_size)
		else:
			print 'HTTP/1.0 200 OK'
			print 'Status: 200 OK'
		
		print "Content-Length: %s" % self.content_length
		print ""

	def stream(self):
		self.printHeader()
		self.filehandle.seek(self.seek_start)

		while data = self.filehandle.read(4096):
			sys.stdout.write(data)
			sys.stdout.flush()

		#sys.stdout.write(self.filehandle.read(self.content_length))

		self.filehandle.close()
		self.archive_handle.close()



def getRange(self):
	request_range = os.environ('HTTP_RANGE')
	request_range = request_range[6:].split('-')

	if (request_range[0] < 0):
		request_range[0] = 0

	if (request_range[1] < 0):
		request_range[1] = -1

	return request_range


if __name__ == '__main__':
	form = cgi.FieldStorage()
	path = cgi.escape(form.getFirst('file', 'empty'))

	[seek_start, seek_end] = getRange()

	streamer = Streamer(path, seek_start, seek_end)
	streamer.stream()