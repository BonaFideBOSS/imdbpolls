import sys
for i in range(0,2000):
    sys.stdout.write("\rDoing thing %i" % i)
    sys.stdout.flush()
